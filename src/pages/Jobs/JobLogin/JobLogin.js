import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleChanger from "../../../TitleChanger/TitleChanger";

const JobLogin = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="course_login">
      <TitleChanger title="Login" />
      <div className="form">
        <div className="form_content">
          <div className="logo">
            <Link to={"/"}>
              <img src="assets/images/opa_logo.png" alt="" />
            </Link>
          </div>
          <div className="login_btn">
            <a href="/job-login-page">
              <button>Login</button>
            </a>
          </div>
          <div className="create_btn">
            <Link to="/job-create-page">
              <button>Create Account</button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <div className="img">
        <div className="course_menu_open">
          <div className="course_menu_open_body">
            <div className="navbar">
              <ul>
                <li>
                  <div className="list list1" onClick={() => setShow(!show)}>
                    <img src="assets/images/PowerUps.png" alt="" />
                  </div>
                  {show && (
                    <div className="more_list_container">
                      <div className="header">More Apps</div>
                      <div className="content">
                        <div>
                          <div className="img_con">
                            <img src="assets/images/ProfileIcon.png" alt="" />
                          </div>
                          <p>Account</p>
                        </div>
                        <div>
                          <Link to="/course-login">
                            <div className="img_con">
                              <img src="assets/images/Courses.png" alt="" />
                            </div>
                            <p>Courses</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/course-create-page">
                            <div className="img_con">
                              <img src="assets/images/Dashboard.png" alt="" />
                            </div>
                            <p>Dashboard</p>
                          </Link>
                        </div>
                        <div>
                          <div className="img_con">
                            <img src="assets/images/Job.png" alt="" />
                          </div>
                          <p>Job</p>
                        </div>
                        <div>
                          <Link to="/course-login">
                            <div className="img_con">
                              <img src="assets/images/Login.png" alt="" />
                            </div>
                            <p>Login</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <div className="list">
                    <img src="assets/images/menu_open_profile.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobLogin;