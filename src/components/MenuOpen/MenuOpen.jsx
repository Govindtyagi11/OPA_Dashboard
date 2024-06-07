import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu_open = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="menu_open">
      <div className="menu_open_body">
        <div className="navbar">
          <ul>
            <li>
              <div className="nav_input">
                <i className="material-icons search_icon">search</i>
                <input
                  type="search"
                  placeholder="Search for anything"
                  className="search"
                />
                <button>Search</button>
              </div>
            </li>
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
                      <Link to="/job-login">
                        <div className="img_con">
                          <img src="assets/images/Job.png" alt="" />
                        </div>
                        <p>Job</p>
                      </Link>
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
        <div className="logo">
          <img src="assets/images/opa_logo.png" alt="" />
        </div>
      </div>
      <div className="menu_open_footer">
        <div className="location">
          <i className="material-icons search_icon">place</i>
          <div className="location_address">
            <span>Nigeria</span>
            <span style={{ color: "grey" }}>Bonny Island, Rivers State</span>
          </div>
        </div>
        <div className="footer_list">
          <ul>
            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu_open;
