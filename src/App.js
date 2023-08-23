import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Actions/userAction";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import Header from "./Components/Header";
import Header from "./Components/Header/header/NewHeader";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import NewFooter from "./Components/NewFooter/NewFooter";
import ScrollToTop from "./Components/ScrollToTop";

import Course from "./Screens/Course";
import Courses from "./Screens/Courses";
import LandingPage from "./Screens/Landing-page";
import WorkshopDashboard from "./Screens/WorkshopDashboard";
// import StudentInfo from './Screens/StudentInformation'
import LoginAccount from "./Screens/LogIn";
import SetPass from "./Screens/SetPassword";
import ResetPass from "./Screens/ResetPassword";
import ValidateResetLink from "./Screens/ResetPassword/ValidateResetLink";
import ForgotPass from "./Screens/ForgotPassword";
import CreateAccount from "./Screens/CreateAccount";
import FreeWorkshop from "./Screens/FreeWorkshop";
import WorkshopSignup from "./Screens/WorkshopSignup";
import PageNotFound from "./Screens/PageNotFound";
import ErrorHandler from "./Screens/ErrorHandler";
import AboutUs from "./Screens/AboutUs";
import FreeClass from "./Screens/FreeClass";
import Project from "./Screens/Project";
import ProjectView from "./Screens/ProjectView";
import FooterBottom from "./Components/FooterBottom";
import ProjectProfile from "./Components/ProjectProfile";
import Innovation from "./Screens/Innovation";
import InnovationView from "./Screens/InnovationView";
import StudentProfile from "./Screens/StudentProfile";
import InstructorProfile from "./Screens/InstructorProfile";
import InstructorSchedule from "./Screens/InstructorSchedule";
import Blog from "./Screens/Blog";
import SingleBlog from "./Screens/SingleBlog";
import BlogAdmin from "./Screens/BlogAdmin";
import Payment from "./Screens/Payment";
import BuildProject from "./Screens/BuildProject";
import SearchCertificate from "./Screens/AllCertificates";
import YoungInnovator from "./Screens/YoungInnovator";
import SummerCamp2021 from "./Screens/SummerCamp2021";
import YoungInnovators from "./Screens/YoungInnovators";
// ADMIN
import Admin from "./Screens/Admin";
import axios from "axios";
import DiscussionForum from "./Screens/DiscussionForum";
import YoungInnovatorsForm from "./Screens/YoungInnovators/YoungInnovatorsForm/YoungInnovatorsForm";
import FormSubmittedSuccessfully from "./Screens/YoungInnovators/YoungInnovatorsForm/FormSubmittedSuccessfully";
import YoungInnovatorsEntries from "./Screens/YoungInnovators/YoungInnovatorsForm/YoungInnovatorsEntries";
import WhatsApp from "./Screens/YoungInnovators/Chatbot/WhatsApp";
import BookADemoClass from "./Screens/NewStudent/NewBookADemoClass/BookADemoClass";
import Privacy from "./Screens/Privacy/Privacy";
import Terms from "./Screens/Terms/Terms";
import StudentSignup from "./Screens/NewStudent/NewStudentSignup/StudentSignup";
import NewBootcamp from "./Screens/NewBootcamp/NewBootcamp";
import BootcampDashboard from "./Screens/NewBootcampDashboard/index";
import SummerCampDashboard from "./Screens/SummercampDashboard/index";
import StudentLogin from "./Screens/NewStudent/NewStudentLogin/StudentLogin";
import RegisterSuccessful from "./Screens/NewStudent/RegisterSuccessful/RegisterSuccessful";
import StudentForgotPass from "./Screens/NewStudent/NewStudentForgotPass/StudentForgotPass";
import InnovationOlympiad from "./Screens/IO_InnovationOlympiad/InnovationOlympiad";
import RegistrationGuidelines from "./Screens/IO_RegistrationGuidelines/RegistrationGuidelines";
import TeamRegistration from "./Screens/IO_TeamRegistration/TeamRegistration";
import TeamLogin from "./Screens/IO_TeamLogin/TeamLogin";
import TeamDashboard from "./Screens/IO_TeamDashboard/TeamDashboard";
import TeamInitiated from "./Screens/IO_TeamInitiated/TeamInitiated";
import TeamCompleteRegistration from "./Screens/IO_CompleteRegistration/TeamCompleteRegistration";
import OlympiadRules from "./Screens/IO_Rules/OlympiadRules";
import BootcampVerified from "./Screens/IO_BootcampVerified/BootcampVerified";
import ProjectAdmin from "./Screens/ProjectsHub/ProjectAdmin/ProjectAdmin";
import AllProjects from "./Screens/ProjectsHub/AllProjects/AllProjects";
import AddProject from "./Screens/ProjectsHub/AddProject/AddProject";
import PreviewProject from "./Screens/ProjectsHub/PreviewProject/PreviewProject";
import ProjectsAdminLogin from "./Screens/ProjectsHub/ProjectsAdminLogin/ProjectsAdminLogin";
import SummerCamp2022 from "./Screens/SummerCamp2022/SummerCamp2022";
import SummerCamp2022Apply from "./Screens/SummerCamp2022/SummerCamp2022Apply/SummerCamp2022Apply";
import SummerCamp2022Success from "./Screens/SummerCamp2022/SummerCamp2022Success/SummerCamp2022Success";
import SummerCamp2022Brochure from "./Screens/SummerCamp2022/SummerCamp2022Brochure/SummerCamp2022Brochure";
import SC22Login from "./Screens/SC22Login/SC22Login";
import DashboardBeingBuilt from "./Screens/Being Built/Dashboard/component";
import OthersProfile from "./Screens/Being Built/Dashboard/Profile/component";
import SC22Signup from "./Screens/SC22Login/SC22Signup";
import StudentDashboard from "./Screens/NewSummerCampDashboard/StudentDashboard";

import CertificateViewSummerCamp from "./Components/Certificate-View-Summercamp/CertificateViewSummerCamp";
function App() {
  //const HeaderComponent = withRouter( props => <Header {...props}/>)
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (window.location.href.toString().includes("/admin")) {
      setShowAdmin(true);
    }
    if (window.innerWidth < 600) {
      setIsDesktop(false);
    } else {
      // Start of Tawk script
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = `https://embed.tawk.to/61de9f22f7cf527e84d1b70a/1fp6pr8v4`;
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    }
  });
  React.useEffect(() => {
    checkToken();
    setInterval(() => {
      checkToken();
    }, 1000 * 60 * 5);
  }, []);
  const checkToken = () => {
    const _userInfo = localStorage.getItem("userInfo");
    const token = _userInfo ? JSON.parse(_userInfo).token : "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    if (token) {
      axios
        .get("/api/validateTokenExpiry", config)
        .then((res) => {
          // valid
          console.log(res.data);
        })
        .catch((err) => {
          // expire
          console.log(err);
          dispatch(logout());
        });
    }
  };
  return (
    <BrowserRouter primary={false}>
      <>
        {showAdmin ? (
          <Switch>
            <Route path="/admin" exact={true} component={Admin} />
          </Switch>
        ) : (
          <>
            <Route
              render={({ location }) =>
                ["/project", "/innovation"].includes(location.pathname) ? (
                  <ProjectProfile />
                ) : location.pathname.includes("/profile/student") ||
                  location.pathname.includes("summercamp-dashboard") ||
                  location.pathname.includes("preview-project") ||
                  [
                    "/studentlogin",
                    "/studentsignup",
                    "/bookademoclass",
                    "/student-forgot-password",
                    "/student-reset-password",
                    "/democlass-form-submitted",
                    "/login",
                    "/registered-successful",
                    "/projects-admin-login",
                    "/dashboard-being-built",
                    "/summercamp-dashboard",
                    "/summercamp2022-register",
                    "/summercamp2022-login",
                    "/sc-profile",
                    "/summercamp-password-reset",
                  ].includes(location.pathname) ||
                  location.pathname.includes("/sc-profile") ? (
                  <></>
                ) : (
                  <Header />
                )
              }
            />
            <Loader />
            <main>
              <ScrollToTop>
                <Switch>
                  <Route path="/" exact={true} component={LandingPage} />
                  <Route
                    path="/course/:courseId"
                    exact={true}
                    component={Course}
                  />
                  <Route
                    path={["/courses", "/courses/:groupId"]}
                    exact={true}
                    component={Courses}
                  />
                  <Route
                    path="/dashboard"
                    exact={true}
                    component={WorkshopDashboard}
                  />
                  {/* <Route path="/studentInfo" exact={true} component={StudentInfo} /> */}
                  <Route path="/login" exact={true} component={LoginAccount} />
                  <Route
                    path={["/setPassword", "/setPassword/:email"]}
                    exact={true}
                    component={SetPass}
                  />
                  {/* <Route
                    path="/resetPassword"
                    exact={true}
                    component={ResetPass}
                  /> */}
                  <Route
                    path="/resetPassword"
                    exact={true}
                    component={ValidateResetLink}
                  />
                  <Route
                    path="/forgotPassword"
                    exact={true}
                    component={ForgotPass}
                  />
                  <Route
                    path="/register"
                    exact={true}
                    component={CreateAccount}
                  />
                  <Route
                    path="/freeWorkshop"
                    exact={true}
                    component={FreeWorkshop}
                  />
                  <Route
                    path="/workshopSignup"
                    exact={true}
                    component={WorkshopSignup}
                  />
                  <Route
                    path="/errorHandler"
                    exact={true}
                    component={ErrorHandler}
                  />
                  <Route path="/aboutUs" exact={true} component={AboutUs} />
                  <Route path="/project" exact={true} component={Project} />
                  <Route
                    path="/project/:projectId"
                    exact={true}
                    component={ProjectView}
                  />
                  <Route
                    path="/innovation"
                    exact={true}
                    component={Innovation}
                  />
                  <Route
                    path="/innovation/:innovationId"
                    exact={true}
                    component={InnovationView}
                  />
                  <Route
                    path="/profile/student"
                    exact={true}
                    component={StudentProfile}
                  />
                  <Route
                    path="/profile/student/:profileId"
                    exact={true}
                    component={StudentProfile}
                  />
                  <Route path="/freeclass" exact={true} component={FreeClass} />
                  <Route
                    path="/instructor/profile"
                    exact={true}
                    component={InstructorProfile}
                  />
                  <Route
                    path="/instructor/schedule"
                    exact={true}
                    component={InstructorSchedule}
                  />
                  <Route
                    path="/blog"
                    component={Blog}
                    exact
                    // component={() => {
                    //   window.location.href = "http://blog.rancholabs.com";
                    //   return null;
                    // }}
                  />
                  <Route path="/blog/:blogID" component={SingleBlog} exact />
                  <Route path="/blog-:blogID" component={SingleBlog} exact />
                  <Route path="/blogadmin" component={BlogAdmin} exact />
                  <Route
                    path={["/enroll", "/enroll/:courseId"]}
                    exact={true}
                    component={Payment}
                  />
                  <Route
                    path="/buildproject"
                    exact={true}
                    component={BuildProject}
                  />

                  <Route
                    path="/summercamp2022/view-summercamp-certificate"
                    exact={true}
                    component={CertificateViewSummerCamp}
                  />

                  <Route
                    path="/certificates"
                    exact={true}
                    component={SearchCertificate}
                  />
                  {/* <Route
                    path="/younginnovator"
                    exact={true}
                    component={YoungInnovator}
                  /> */}
                  <Route
                    path="/younginnovators"
                    exact={true}
                    component={YoungInnovators}
                  />
                  <Route
                    path="/younginnovators-form"
                    exact={true}
                    component={YoungInnovatorsForm}
                  />
                  <Route
                    path="/younginnovators-form-submitted"
                    exact={true}
                    component={FormSubmittedSuccessfully}
                  />
                  <Route
                    path="/younginnovators-form-entries"
                    exact={true}
                    component={YoungInnovatorsEntries}
                  />
                  <Route
                    path="/bookademoclass"
                    exact={true}
                    component={BookADemoClass}
                  />
                  <Route
                    path="/bootcamp"
                    exact={true}
                    component={NewBootcamp}
                  />
                  <Route
                    path="/bootcamp-dashboard"
                    exact={true}
                    component={BootcampDashboard}
                  />
                  <Route
                    path="/studentsignup"
                    exact={true}
                    component={SC22Signup}
                  />
                  <Route
                    path="/studentlogin"
                    exact={true}
                    component={SC22Login}
                  />
                  <Route
                    path="/student-forgot-password"
                    exact={true}
                    component={StudentForgotPass}
                  />
                  <Route
                    path="/registered-successful"
                    exact={true}
                    component={RegisterSuccessful}
                  />
                  {/* Innovation Olympiad Routes */}
                  <Route
                    path="/olympiad"
                    exact={true}
                    component={InnovationOlympiad}
                  />
                  <Route
                    path="/registration-guidelines"
                    exact={true}
                    component={RegistrationGuidelines}
                  />
                  <Route
                    path="/team-registration"
                    exact={true}
                    component={TeamRegistration}
                  />
                  <Route
                    path="/team-login"
                    exact={true}
                    component={TeamLogin}
                  />
                  <Route
                    path="/team-dashboard"
                    exact={true}
                    component={TeamDashboard}
                  />
                  <Route
                    path="/team-initiated"
                    exact={true}
                    component={TeamInitiated}
                  />
                  <Route
                    path="/team-complete-registration"
                    exact={true}
                    component={TeamCompleteRegistration}
                  />
                  <Route
                    path="/olympiad-rules"
                    exact={true}
                    component={OlympiadRules}
                  />
                  <Route
                    path="/bootcamp-verified"
                    exact={true}
                    component={BootcampVerified}
                  />
                  {/* Project Hub Routes */}
                  <Route
                    path="/project-admin"
                    exact={true}
                    component={ProjectAdmin}
                  />
                  <Route
                    path="/projects"
                    exact={true}
                    component={AllProjects}
                  />
                  <Route
                    path="/add-project"
                    exact={true}
                    component={AddProject}
                  />
                  <Route
                    path="/project-admin/project/:projectId"
                    exact={true}
                    component={AddProject}
                  />
                  <Route
                    path="/preview-project-:projectId"
                    exact={true}
                    component={PreviewProject}
                  />
                  <Route
                    path="/project-:projectName-:projectId"
                    exact={true}
                    component={PreviewProject}
                  />
                  <Route
                    path="/projects-admin-login"
                    exact={true}
                    component={ProjectsAdminLogin}
                  />
                  <Route
                    path="/summercamp2021"
                    exact={true}
                    component={SummerCamp2021}
                  />
                  <Route
                    path="/summercamp2022"
                    exact={true}
                    component={SummerCamp2022}
                  />
                  <Route
                    path="/summercamp2022/"
                    exact={false}
                    component={SummerCamp2022}
                  />
                  <Route
                    path="/summercamp2022-apply-form"
                    exact={true}
                    component={SummerCamp2022Apply}
                  />
                  <Route
                    path="/summercamp2022-brochure"
                    exact={true}
                    component={SummerCamp2022Brochure}
                  />
                  <Route
                    path="/summercamp2022-form-submitted"
                    exact={true}
                    component={SummerCamp2022Success}
                  />
                  <Route
                    path="/summercamp2022-success"
                    exact={true}
                    component={SummerCamp2022Success}
                  />
                  <Route
                    path="/summercamp2022-login"
                    exact={true}
                    component={SC22Login}
                  />
                  <Route
                    path="/summercamp-password-reset"
                    exact={true}
                    component={StudentForgotPass}
                  />
                  <Route
                    path="/dashboard-being-built"
                    exact={true}
                    component={DashboardBeingBuilt}
                  />
                  <Route
                    path="/sc-profile-:id"
                    exact={true}
                    component={OthersProfile}
                  />
                  <Route
                    path="/summercamp2022-register"
                    exact={true}
                    component={SC22Signup}
                  />
                  <Route
                    path="/summercamp-dashboard"
                    exact={true}
                    component={DashboardBeingBuilt}
                  />
                  <Route
                    path="/discussion"
                    exact={true}
                    component={DiscussionForum}
                  />
                  <Route path="/privacy" exact={true} component={Privacy} />
                  <Route path="/terms" exact={true} component={Terms} />
                  <Route
                    path="/summer-camp-dashboard"
                    exact={true}
                    component={SummerCampDashboard}
                  />

                  <Route component={PageNotFound} />
                </Switch>
              </ScrollToTop>
            </main>
            <Route
              render={({ location }) =>
                ["/project", "/innovation"].includes(location.pathname) ? (
                  <FooterBottom />
                ) : location.pathname.includes("/profile/student") ||
                  [
                    "/studentlogin",
                    "/studentsignup",
                    "/bookademoclass",
                    "/studentdashboard",
                    "/student-forgot-password",
                    "/student-reset-password",
                    "/democlass-form-submitted",
                    "/login",
                    "/registered-successful",
                    "/projects-admin-login",
                    "/summercamp-dashboard",
                    "/summercamp2022-register",
                    "/summercamp2022-login",
                    "/dashboard-being-built",
                    "/sc-profile",
                    "/summercamp-password-reset",
                  ].includes(location.pathname) ||
                  location.pathname.includes("/sc-profile") ? (
                  <></>
                ) : (
                  <NewFooter />
                )
              }
            />
          </>
        )}
        {!isDesktop && <WhatsApp />}
      </>
    </BrowserRouter>
  );
}
export default App;
