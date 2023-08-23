import React from "react";

import DashboardHero from "./DashboardHeroSection/DashboardHero";
import ReferSection from "./ReferSection/ReferSection";
import InnovatorsSection from "./InnovatorsSection/InnovatorsSection";
import StartJourney from "./StartJourneySection/StartJourney";
import { useHistory } from "react-router-dom";
import CertificateSection from "./CertificateSection/CertificateSection";

const LoginWithLaptop = () => {
  return (
    <>
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          padding: "20px",
        }}
      >
        <h2 className="text-dark">
          Please login from the laptop to access the dashboard{" "}
        </h2>
      </div>
    </>
  );
};

const NoAccess = () => {
  const history = useHistory();
  history.push("/bootcamp");
  return <></>;
};

function index() {
  return (
    <>
      {/* {localStorage.getItem("userDetail") &&
      JSON.parse(localStorage.getItem("userDetail")).auth ? (
        window.innerWidth < 768 ? (
          <LoginWithLaptop />
        ) : (
          <>
            <DashboardHero />

            <StartJourney />
          </>
        )
      ) : (
        <NoAccess />
      )} */}
      <DashboardHero />
      {/* <ReferSection /> */}
      <CertificateSection />
      <InnovatorsSection />
      <StartJourney />
    </>
  );
}

export default index;
