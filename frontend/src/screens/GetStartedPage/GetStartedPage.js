import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import HomeAdminLogin from "../../components/HomeAdminLogin";
import HomeEmployeeLogin from "../../components/HomeEmployeeLogin";

import "../../styles/GetStartedPage/GetStartedPage.css";
import AdminRegisterPage from "./AdminRegisterPage";
import AdminHeader from "./AdminHeader";
const GetStartedPage = () => {
  const dispatch = useDispatch();

  const { adminError, employeeError } = useParams();
  const adminErrorBool =
    adminError === "adminLoginExpired" || adminError === "notLoggedIn"
      ? true
      : false;
  const employeeErrorBool =
    employeeError === "employeeLoginExpired" || employeeError === "notLoggedIn"
      ? true
      : false;
  const [adminLogin, setAdminLogin] = useState(adminErrorBool);
  const showAdminLogin = () => {
    setAdminLogin(true);
  };

  const [employeeLogin, setEmployeeLogin] = useState(employeeErrorBool);
  const showEmployeeLogin = () => {
    setEmployeeLogin(true);
  };
  // dispatch(adminLoginClean());
  // dispatch(adminLogoutClean());
  // dispatch(checkAdminLoginStatusClean());
  // dispatch(employeeLoginClean());
  // dispatch(employeeLogoutClean());
  // dispatch(checkEmployeeLoginStatusClean());
  // dispatch(employeeFetchUsersClean());
  const [showAdminRegister, setShowAdminRegister] = useState();
  const showAdminRegisterFnc = () => {
    setShowAdminRegister(true);
  };
  return (
    <>
      {showAdminRegister && (
        <AdminRegisterPage
          setAdminLogin={setShowAdminRegister}
        ></AdminRegisterPage>
      )}{" "}
      {adminLogin && (
        <HomeAdminLogin
          setAdminLogin={setAdminLogin}
          adminError={adminError}
        ></HomeAdminLogin>
      )}
      {employeeLogin && (
        <HomeEmployeeLogin
          setAdminLogin={setEmployeeLogin}
          employeeError={employeeError}
        ></HomeEmployeeLogin>
      )}
      <div className="getstarted__page">
        {/* navbar */}
        <AdminHeader></AdminHeader>
        {/* get started section */}
        <div className="row get__started__section ">
          <div className="col col-lg-6 col-md-12 col-sm-12  text__section">
            <div className="text__section__title">
              Manage your all employees & users all in one place.
            </div>
            <div className="text__section__subtitle">
              Admin can add employees and users. And Employees can send any
              updates via email.🎉
            </div>
            <div className="">
              <button
                className="get__started__button"
                onClick={showAdminRegisterFnc}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 order-lg-0 order-first image__section">
            <img
              src="https://res.cloudinary.com/proudposhak-com/image/upload/v1653551987/easypizi/busy-project-manager-overwhelmed-by-work_1_ogglay.png"
              alt="getstarted"
              className="getStarte__page__image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedPage;
