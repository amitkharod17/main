import React, { useState, useEffect } from 'react';
import "./StudentSignup.css";
import NewLogoSvg from "../img/logo.svg";
import axios from "axios";
import keys from "../../../paykey";
import { useHistory, useLocation } from "react-router-dom";

function validateEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email) === false) {
    return false;
  } else return true;
}

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function StudentSignup() {

  const [userBootcampCoupon, setUserBootcampCoupon] = useState("");
  const [bootcampPrice, setBootcampPrice] = useState("999");
  const [couponError,setCouponError] = useState("");
  const [nameError,setNameError] = useState("");
  const [emailIdError,setEmailIdError] = useState("");
  const [phoneNumberError,setPhoneNumberError] = useState("");
  const [selectThemeError,setSelectThemeError] = useState("");
  const [selectBatchDateAndTimeError,setSelectBatchDateAndTimeError] = useState("");

  const history = useHistory();

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const referCode = query.get("refer");
  // console.log(referCode);

  const registerUser = async (userData) => {
    try {
      const response = await axios.post("/api/bootcamp/register", userData);
      // alert(response);
    } catch (err) {
      console.log(err);
    }
  }

  const displayRazorpay = async (formData) => {

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const paymentBody = {
      price: {
        amount: bootcampPrice,
        currencyCode: "INR",
      },
      batchId: ""
    };

    const data = await axios
      .post("/api/bootcamp/payment-order", paymentBody)
      .then((res) => {
        return res.data;
      });
      // console.log(data);
    const options = {
      key: keys.RAZOR_PAY_KEY_ID, //test mode key
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Rancho Labs",
      description: "Thank you for choosing Rancho Labs.",
      image:
        "https://rancho-labs-app.s3.amazonaws.com/images/logo-1607930535803.png",
      handler: async function (response) {
        // alert("Thank you for choosing Rancho Labs!");
        // console.log(response);
        const details = {
          orderCreationId: data.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        // console.log(details);
        if(userBootcampCoupon !== "") {
          try {
            // console.log("Update coupon")
            const response = await axios.patch("/api/bootcamp/coupon/update", { code: userBootcampCoupon });
            // console.log(response,"Update coupon")
          } catch (err) {
            console.log(err);
          }
        }
        try {
          // console.log("payment verification");
          // const result = await axios.post("/api/bootcamp/payment-verification", details);
          // console.log(result.data);
          // if (result.data.message === "success") {
            registerUser({
              formData: formData,
              paymentId: details.razorpayPaymentId,
              orderId: details.razorpayOrderId,
              couponCode: userBootcampCoupon,
            });
            window.location.href = "/registered-successful";
          // }
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        // name:
        // "ABC",
        // email: "sdfdsjfh2@ndsfdf.com",
        // phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const formHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      emailId: e.target.emailId.value,
      phoneNumber: e.target.phoneNumber.value,
      selectedTheme: e.target.selectTheme.value,
      selectedBatchDateAndTime: e.target.selectBatchDateAndTime.value,
      referrerCode: referCode !== "" ? referCode : null,
    }
    // console.log(formData);
    if(formData.name !== "" && 
        formData.emailId !== "" && 
        formData.phoneNumber !== "" &&
        formData.phoneNumber.length >= 10 && 
        validateEmail(formData.emailId) &&
        formData.selectedTheme.toLowerCase() !== "select theme" &&
        formData.selectedBatchDateAndTime.toLowerCase() !== "select batch date and time") {
          if (bootcampPrice === 0) {
            try {
              await axios.patch("/api/bootcamp/coupon/update", { code: userBootcampCoupon });
            } catch (err) {
              console.log(err);
            }
            try {
                registerUser({
                  formData: formData,
                  paymentId: null,
                  orderId: null,
                  couponCode: userBootcampCoupon,
                });
                window.location.href = "/registered-successful";
            } catch (err) {
              console.log(err);
            }
          } else {
            try {
              const response = await axios.post('/api/bootcamp/user/exists', { emailId: formData.emailId });
              // console.log(response);
              if(response.data.emailExists) {
                setEmailIdError("Email already exists");
              } else {
                displayRazorpay(formData);
              }
            } catch(err) {
              console.log(err);
            }
          }
      } else {
        if(formData.name==="") {
          setNameError("*This field must not be empty.");
        } else {
          setNameError("");
        }
        if(formData.phoneNumber==="") {
          setPhoneNumberError("*This field must not be empty." );
        } else if(formData.phoneNumber.length < 10) {
          setPhoneNumberError("*Mobile number should contains 10 digits");
        } else {
          setPhoneNumberError("");
        }
        if(formData.emailId==="") {
          setEmailIdError("*This field must not be empty.");
        } else if(!validateEmail(formData.emailId)) {
          setEmailIdError("*Please enter a valid email address");
        } else {
          setEmailIdError("");
        }
        if(formData.selectedTheme.toLowerCase() === "select theme") {
          setSelectThemeError("*Please select a valid theme"); 
        } else {
          setSelectThemeError("");
        }
        if(formData.selectedBatchDateAndTime.toLowerCase() === "select batch date and time") {
          setSelectBatchDateAndTimeError("*Please select a valid date and time");
        } else {
          setSelectBatchDateAndTimeError("");
        }
      }
  }
  const onClickHandler = () => {
    history.push("/");
  }

  const checkBootcampCoupon = async () => {
    if (userBootcampCoupon !== "") {
      try {
        const response = await axios.get(`/api/bootcamp/coupon/code/${userBootcampCoupon}`);
        // console.log(response);
        if (response.data) {
          if (response.data.coupon.active && response.data.coupon.frequency !== response.data.coupon.usedTimes) {
            // console.log("Coupon is valid");
            setBootcampPrice(response.data.coupon.amountAfterDiscount);
            setCouponError(() => "Coupon applied!");
          } else {
            // console.log("coupon is not valid");
            // console.log(response);
            setCouponError(() => "coupon is not valid");
          }
        }
      } catch (err) {
        // console.log(err,err.response);
        console.log(err);
        setCouponError("coupon is not valid");
      }
    }
  }

  // const checkBootcampCoupon = () => {
  //   if (userBootcampCoupon !== "") {
  //     axios.get(`/api/bootcamp/coupon/code/${userBootcampCoupon}`)
  //     .then((response) => {
  //       if (response.data) {
  //         if (response.data.coupon.active && response.data.coupon.frequency !== response.data.coupon.usedTimes) {
  //           // console.log("Coupon is valid");
  //           setBootcampPrice(response.data.coupon.amountAfterDiscount);
  //           setCouponError(() => "Coupon applied!");
  //         } else {
  //           // console.log("coupon is not valid");
  //           console.log(response);
  //           setCouponError(() => "coupon is not valid");
  //         }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //       setCouponError(() => err.response.data.error);
  //     })
  //   }
  // }

  const NoAccess = () => {
    const history = useHistory();
    history.push('/bootcamp-dashboard');
    return <></>
  }  

  return (
    <>
      { localStorage.getItem("userDetail") &&
          JSON.parse(localStorage.getItem("userDetail")).auth ? 
          <NoAccess />:
        <section className="new_student_signup">
        <div className="new_logo">
          <img src={NewLogoSvg} alt="Rancho Labs Logo" onClick={onClickHandler} />
        </div>
        <div className="signup_form_container">
          <div className="signup_form_heading">
            <h2>Innovation Bootcamp Registration</h2>
          </div>
          <form method="POST" onSubmit={formHandler}>
            <div className="signup_form_steps">
              <div className="step_1_register">Step 1: Register</div>
              <div className="step_2_payment">Payment</div>
            </div>
            <div class="form-group">
              <label for="exampleInputName1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="emailHelp"
                placeholder="Name"
                name="name"
                required
                autoComplete='off' />
                 {nameError !== "" && <span className="coupon_error">{nameError}</span>}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Id</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email Id"
                name="emailId"
                required
                autoComplete='off' />
                {emailIdError !== "" && <span className="coupon_error">{emailIdError}</span>}
            </div>
            <div class="form-group">
              <label for="exampleInputPhoneNumber1">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhoneNumer1"
                placeholder="Phone Number"
                name="phoneNumber"
                required
                autoComplete='off' />
                {phoneNumberError !== "" && <span className="coupon_error">{phoneNumberError}</span>}
            </div>
            <div className="form-group">
              <label for="exampleSelectTheme">Select Theme</label>
              <select
                className="form-control"
                id="selectTheme"
                name="selectTheme"
                required
              >
                <option value="Select theme">Select theme:</option>
                <option value="Game Development & AI">Game Development & AI</option>
                <option value="Robotics & AI">Robotics & AI</option>
                <option value="App Development & AI">App Development & AI</option>
              </select>
              {selectThemeError !== "" && <span className="coupon_error">{selectThemeError}</span>}
            </div>
            <div className="form-group">
              <label for="exampleSelectTheme">Select Batch Date and Time</label>
              <select
                className="form-control"
                id="selectBatchDateAndTime"
                name="selectBatchDateAndTime"
                required
              >
                <option value="Select batch date and time">Select batch date and time:</option>
                <option value="19th - 20th March, 5pm - 7pm">19th - 20th March, 5pm - 7pm</option>
                <option value="26th - 27th March, 5pm - 7pm">26th - 27th March, 5pm - 7pm</option>
              </select>
              {selectBatchDateAndTimeError !== "" && <span className="coupon_error">{selectBatchDateAndTimeError}</span>}
            </div>
            <div className="form-group">
              <label for="exampleApplyCoupon" className='apply_coupon' >Apply Coupon Code</label>
              <div className="coupon_box">
                <input
                  className="coupon_input"
                  name="applyCoupon"
                  value={userBootcampCoupon}
                  onChange={(e) => setUserBootcampCoupon(e.target.value)}
                  autoComplete='off'
                ></input>
                <button id="btnApply" type="button" className="btn_apply" onClick={checkBootcampCoupon} >Apply</button>
                {couponError !== "" && <span className={couponError.toLowerCase() === "coupon applied!" ? "coupon_valid":"coupon_error"} >*{couponError}</span>}
              </div>
            </div>
            <button
              type="submit"
              className="btn_pay btn btn-primary"
            >{
              bootcampPrice === "999" ? 
              `Pay Rs ${bootcampPrice}/-` :
              <p>Pay Rs <strike>999/-</strike> Rs {bootcampPrice}/-</p>
            } </button>
            <div className="already_registered">
                <small>
                  Already registered?
                  <a href='/studentlogin'> Login <i class="fas fa-arrow-right fa-xs"></i> </a>
                </small>
              </div>
          </form>
        </div>
      </section>
      }
    </>
  )
}

export default StudentSignup;
