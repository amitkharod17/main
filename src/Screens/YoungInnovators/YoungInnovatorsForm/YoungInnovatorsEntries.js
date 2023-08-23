import React, { useState, useRef, useEffect } from "react";
import "../css/YoungInnovatorsForm.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";


function YoungInnovatorsEntries() {
  const spreadsheetIdRef = useRef();
  const [successMessage, setSuccessMessage] = useState("Please enter spreadsheet Id");
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo || userInfo.role !== "admin") {
      window.location.href = "/";
      // alert("Access Denied - Login using admin Credentials");
    } else {
      setShow(true);
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      spreadsheetId: spreadsheetIdRef.current.value,
    };

    try {
      const response = await axios.post('/api/younginnovators/update-spreadsheet/all', data);
      // console.log(response.data);

      setIsLoading(false);
      if (response.data.success) {
        // console.log(response.data.msg)
        setError("");
        setSuccessMessage(response.data.msg);
      } else {
        // console.log(response.data)
        setError(`Error ${response.data.code}, ${response.data.errors[0].message}`)
      }
    } catch (err) {
      console.log(err);
    }
    // console.log(error);
  };

  return (
    show &&
    <div className="form-container">
      <h1 className="form-heading">
        Young Innovators Program 2022 Entries
      </h1>
      <form method="POST" onSubmit={submitForm}>
        <div className="form-rows">
          <div className="form-group col">
            <label htmlFor="SpreadsheetId">Spreadsheet ID</label>
            <input
              type="text"
              name="spreadsheetId"
              className="form-control"
              id="spreadsheetId"
              ref={spreadsheetIdRef}
              autoComplete="off"
              required
            />
            {!isLoading && error.length === 0 && successMessage.length !== 0 && <span className="text-center text-success" >{successMessage}</span>}
            {isLoading && <Loader
              type="Audio"
              color="rgb(60,250,255)"
              height={80}
              width={80}
              className="text-center"
              timeout={3000} //3 secs
            />}
            {error.length !== 0 && <span className="text-center error" >{error}</span>}
          </div>
        </div>
        <div className="btn-container text-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default YoungInnovatorsEntries;
