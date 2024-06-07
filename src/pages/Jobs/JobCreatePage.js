import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stepper from 'react-stepper-horizontal';
import { GeneralInfo } from "../../components/JobRegistrationProcess/GeneralInfo/GeneralInfo";
import { ContactInfo } from "../../components/JobRegistrationProcess/ContactInfo/ContactInfo";
import { ProfileInfo } from "../../components/JobRegistrationProcess/ProfileInfo/ProfileInfo";

const JobCreatePage = () => {
  const navigation = useNavigate()
  const [show, setShow] = useState(false);
  
    const [ activeStep, setActiveStep ] = useState(0);
  
    const steps = [
      { title: 'General Info' },
      { title: 'Contact Info' },
      { title: 'Profile Info' },
    ];
  
    function getSectionComponent() {
      switch(activeStep) {
        case 0: return <GeneralInfo/>;
        case 1: return <ContactInfo/>;
        case 2: return <ProfileInfo/>;
        default: return null;
      }
    }
  
  return (
    <div className="course_login course_create_page job_create_page">
      <div className="form">
        <div className="form_content">
          <Stepper steps={steps} activeStep={activeStep} />
          <div style={{ padding: "20px" }}>
            {getSectionComponent()}
            {activeStep !== 0 && activeStep !== steps.length - 1 && (
              <button onClick={() => setActiveStep(activeStep - 1)}>
                Previous
              </button>
            )}
            {activeStep !== steps.length - 1 && (
              <button onClick={() => setActiveStep(activeStep + 1)}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="img ">
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

export default JobCreatePage; 