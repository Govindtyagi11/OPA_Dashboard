import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitleChanger from "../../TitleChanger/TitleChanger";

const CourseLoginPage = () => {
  const navigation = useNavigate()
  const [show, setShow] = useState(false);
  const [studentOrTeacher, setStudentOrTeacher] = useState(1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handlerStudentOrTeacher = (num) => {
    setStudentOrTeacher(num);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? "password" : "text");
  };

  const handlerSinIn = (e) => {
    e.preventDefault();
    alert("Login Sucessfully.");
    localStorage.setItem("token_tr", JSON.stringify("thisdflsnfssdfs"))
    navigation("/app/dashboard")
  }

  return (
    <div className="course_login course_login_page">
      <TitleChanger title="Sign Up Student / Sign Up Teacher" />
      <div className="form">
        <div className="form_content">
          <div className="tabs">
            <button
              className={studentOrTeacher === 1 ? "active" : ""}
              onClick={() => handlerStudentOrTeacher(1)}
            >
              Student SignUp
            </button>
            <button
              className={studentOrTeacher === 2 ? "active" : ""}
              onClick={() => handlerStudentOrTeacher(2)}
            >
              Teacher SignUp
            </button>
          </div>
          <div className="logo">
            <img src="assets/images/opa_logo.png" alt="" />
          </div>
          <div className="student_head">
            Login as {studentOrTeacher === 1 ? "Student" : "Teacher"}
          </div>
          <form onSubmit={handlerSinIn}>
            <div className="password">
              <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
            </div>
            <div className="password add-new-class-rt">
              <input type={inputType} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <i className="material-icons" onClick={togglePasswordVisibility}>
                {passwordVisible ? "visibility" : "visibility_off"}
              </i>
            </div>
            <div>
              <button type="submit">Sign In</button>
            </div>
          </form>
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
                          <div className="img_con">
                            <img src="assets/images/Dashboard.png" alt="" />
                          </div>
                          <p>Dashboard</p>
                        </div>
                        <div>
                          <div className="img_con">
                            <img src="assets/images/Job.png" alt="" />
                          </div>
                          <p>Job</p>
                        </div>
                        <div>
                          <div className="img_con">
                            <img src="assets/images/Login.png" alt="" />
                          </div>
                          <p>Login</p>
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

export default CourseLoginPage;