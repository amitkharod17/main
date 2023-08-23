import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./NewHeader.css";
import "../index.css";
import SideNav from "../../SideNav";
import { useHistory, Link } from "react-router-dom";
import NewLogoSVG from "../logo.svg";

const Header = () => {
  const header = useRef();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { appName, isIPadMiniMobileView } = useSelector(
    (state) => state.appDetails
  );
  const {
    backgroundColor,
    color,
    iconColor,
    iconDisplay,
    headerDisplay,
  } = useSelector((state) => state.header);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isYIP,setIsYIP] = useState(false);
  const [isOlympiad,setIsOlympiad] = useState(false);
  const [showDropdown,setShowDropdowm]=useState(false);

  const navOpenHandler = () => {
    setIsNavOpen(true);
  };
  const navCloseHandler = () => {
    setIsNavOpen(false);
  };
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {

    if(["/younginnovators","/younginnovators-form"].includes(window.location.pathname)) {
      setIsYIP(true);
    } else if([
      "/olympiad",
      "/team-registration",
      "/registration-guidelines",
      "/team-login",
      "/team-dashboard",
      "/team-complete-registration"
    ].includes(window.location.pathname)) {
      setIsOlympiad(true);
    }

    const onresize = () => {
      if (
        window.screen.width <= 600 ||
        (isIPadMiniMobileView && window.screen.width <= 768)
      )
        header.current.classList.add("mobile");
      else header.current.classList.remove("mobile");
    };
    window.addEventListener("resize", onresize);
    onresize();

    return () => {
      window.removeEventListener("resize", onresize);
    };
  }, [isIPadMiniMobileView]);

  const logoutHandler = () => {
    localStorage.removeItem("userDetail");
    history.push("/studentlogin");
  }

  const teamLogoutHandler = () => {
    localStorage.removeItem("teamDetail");
    history.push("/olympiad");
  }

  const handleDropDown = () => {
    setShowDropdowm(!showDropdown);
  }

  return (
    window.innerWidth > 900 ? 
    <header
    className={ isOlympiad && !(["/team-registration","/team-login","/team-dashboard","/team-complete-registration","/bootcamp"].includes(window.location.pathname))  ? "nav_header olympiad_bg":"nav_header"}
    ref={header}
    style={{ backgroundColor: backgroundColor, display: headerDisplay }}
  >
    <div className="logo" onClick={goHome}>
      <img className="app-icon" alt="app-icon" src={NewLogoSVG} />
    </div>
    {
      !window.location.pathname.includes('/project-admin') &&
      <ul>
      <li><Link to="/aboutUs" >About Us</Link></li>
      <li className="courses_dropdown" onClick={handleDropDown}>
          Courses <svg width="15" height="8" viewBox="0 0 8 6" class="figma-1vkg3ei"><path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="currentColor"></path></svg>
          <div className={ showDropdown ?  "courses_dropdown_content showDropDown":"courses_dropdown_content"}>
              <Link to="/bootcamp" className="dropdown_item">Bootcamp</Link>
              <Link to="/younginnovators" className="dropdown_item">YIP 2022</Link>
              <Link to="/summercamp2022" className="dropdown_item">Summer Camp</Link>
          </div>
      </li>
      <li><Link to="/blog">Blog</Link></li>
      <li>
        {
          isYIP ? <Link to="/younginnovators-form" className="free_class" >Apply Now</Link>
          : isOlympiad ? 
          localStorage.getItem("teamDetail") && JSON.parse(localStorage.getItem("teamDetail")).auth ?
          <Link to="/team-dashboard" className="free_class" >Team Dashboard</Link> :
          <Link to="/team-registration" className="team_register" >Register</Link> : localStorage.getItem("userDetail") && JSON.parse(localStorage.getItem("userDetail")).auth ? 
          <Link to="/bootcamp-dashboard" className="free_class" >Dashboard</Link>
          : <Link to="/bootcamp" className="free_class" >Bootcamp</Link>
        }
        {
          isOlympiad ? 
          localStorage.getItem("teamDetail") && JSON.parse(localStorage.getItem("teamDetail")).auth ? 
          <Link to="/olympiad" className="login" onClick={teamLogoutHandler} >Logout</Link>
          : <Link to="/team-login" className="team_login" >Team Login</Link> : localStorage.getItem("userDetail") && JSON.parse(localStorage.getItem("userDetail")).auth ?
          <Link to="/studentlogin" className="login" onClick={logoutHandler} >Logout</Link>
          : window.location.pathname.includes("/summercamp2022") ?
          <Link to="/summercamp2022-login" className="login">Login</Link> :
          <Link to="/studentlogin" className="login" >Login</Link>
        }
      </li>
    </ul>
    }
  </header>:
    <header
    className={ isOlympiad && !(["/team-registration","/team-login","/team-dashboard","/team-complete-registration","/bootcamp"].includes(window.location.pathname))  ? "header mobile_olympiad_bg":"header"}
    ref={header}
    style={{ display: headerDisplay }}
  >
    <div className="header-app-line">
      <div className="logo" onClick={goHome}>
        <img className="app-icon" alt="app-icon" src={NewLogoSVG} />
        {/* <img className="app-icon" alt="app-icon" src={Logo} /> */}
        {/* <div className="app-name" style={{ color: color }}>
          {appName}
        </div> */}
      </div>
      {isNavOpen ? (
        <SideNav isOpen={isNavOpen} navCloseHandler={navCloseHandler} />
      ) : (
        <div className="nav-menu">
          {!userInfo && window.innerWidth > 600 && (
            <>
              <button
                className="nav-menu-button nav-menu-button-transparent"
                onClick={() => history.push("/aboutUs")}
                style={{ display: iconDisplay }}
              >
                ABOUT US
              </button>
              <button
                className="nav-menu-button nav-menu-button-filled"
                onClick={() => history.push("/younginnovators")}
                style={{ display: iconDisplay }}
              >
                YIP 2022
              </button>
            </>
          )}
          <svg
            aria-hidden="true"
            onClick={() => navOpenHandler(true)}
            style={{ color: iconColor, display: iconDisplay }}
            focusable="false"
            data-prefix="far"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-bars fa-w-14 fa-3x nav-menu-icon"
          >
            <path
              fill="currentColor"
              d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
              className=""
            ></path>
          </svg>
        </div>
      )}
    </div>
  </header>
  );
};

export default Header;
