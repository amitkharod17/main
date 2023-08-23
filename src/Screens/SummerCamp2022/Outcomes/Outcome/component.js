import React from "react";
import "./component.css";

const Component = (props) => {
  return (
    <div className="col-12 col-lg-6 text-center mx-auto">
      <div className=" flex-column row flex-lg-row my-3 mx-0 mx-lg-5">
        {window.innerWidth > 900 ? (
          <div className={props.id === 1 ? "col-5 mx-auto" : "col-4 mx-auto"}>
            <img
              src={props.icon}
              alt=""
              className={
                props.id === 1 ? "img-outcome sc22_img_outcome" : "img-outcome"
              }
            />
          </div>
        ) : (
          <div className={props.id === 1 ? "col-7 mx-auto" : "col-4 mx-auto"}>
            <img
              src={props.icon}
              alt=""
              className={
                props.id === 1 ? "img-outcome sc22_img_outcome" : "img-outcome"
              }
            />
          </div>
        )}
        <div className="col-7 y-center mx-auto">
          <div className="heading-outcome mt-4 mt-lg-0">{props.heading}</div>
          <div className="text-outcome  mt-1 mb-5 mt-lg-0">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
