import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleChanger from "../../../TitleChanger/TitleChanger";
import { MdCopyright } from "react-icons/md";
import JobSubmit1 from "../../../components/job/JobSubmit/JobSubmit1";
import JobSubmit2 from "../../../components/job/JobSubmit/JobSubmit2";
import JobSubmit3 from "../../../components/job/JobSubmit/JobSubmit3";

const ResumeProfile = () => {
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="resume_profile">
      <TitleChanger title="Job" />
      <div className="resume_profile_body">
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
                      <Link to="/job-landing-page">
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
        <section>
          <div class="resume_profile_title">
            <p>
              Laravel Developer <span>(Full Time)</span> - Amazon.com
            </p>
          </div>
        </section>
        <section className="resume_container">
          <div className="resume_container_bx">
            <div className="view_apply_btn">
              <div className="view_btn">
                <button type="">View Company</button>
              </div>
              <div className="apply_btn">
                <JobSubmit1 open={open} setOpen={setOpen} nextFun={setOpen1} />
                <JobSubmit2
                  open={open1}
                  setOpen={setOpen1}
                  nextFun={setOpen2}
                />
                <JobSubmit3 open={open2} setOpen={setOpen2} />
              </div>
            </div>
            <div className="qualification">
              <div>
                <p>Minimum Qualification :</p>
                <span>Bachelor</span>
              </div>
              <div>
                <p>Experience Level :</p>
                <span>Mid Level</span>
              </div>
              <div>
                <p>Location :</p>
                <span>San Francisco, USA</span>
              </div>
              <div>
                <p>Appliance Deadline :</p>
                <span>12/08/2024</span>
              </div>
              <div>
                <p>Salary Range :</p>
                <span>$105,000-150,000</span>
              </div>
            </div>
            <div className="job_description">
              <div className="title">
                <h2>Job Description</h2>
              </div>
              <div>
                <p>
                  We are searching for a Laravel developer to build web
                  applications for our company. In this role, you will design
                  and create projects using, Laravel framework and PHP, and
                  assist the team in delivering high-quality web applications,
                  services, and tools for our business.
                </p>
              </div>
              <div>
                <p>
                  To ensure success as a Laravel developer you should be adept
                  at utilizing Laravel's GUI and be able to design a PHP
                  application from start to finish. A top-notch Laravel
                  developer will be able to leverage their expertise and
                  experience of the framework to independently produce complete
                  solutions in a short turnaround time.
                </p>
              </div>
            </div>
            <div className="job_requirement">
              <div className="title">
                <h2>Laravel Development Requirements:</h2>
              </div>
              <div>
                <ul>
                  <li>
                    A degree in programming, computer science, or a related
                    field.
                  </li>
                  <li>
                    Experience working with PHP, performing unit testing, and
                    managing APIs such as REST.
                  </li>
                  <li>
                    A solid understanding of application design using Laravel.
                  </li>
                  <li>Knowledge of database design and querying using SQL.</li>
                  <li>
                    Proficiency in HTML and JavaScript. Experience developing in
                    Vue is considered a plus.
                  </li>
                  <li>Practical experience using the MVC architecture.</li>
                  <li>The ability to work on LAMP development environment</li>
                  <li>Problem-solving skills and critical mindset.</li>
                  <li>Great communication skills.</li>
                  <li>The desire and ability to learn.</li>
                </ul>
              </div>
            </div>
            <div className="job_responsibility">
              <div className="title">
                <h2>Laravel Development Requirements:</h2>
              </div>
              <div>
                <ul>
                  <li>
                    Discussing project aims with the client and development
                    team.
                  </li>
                  <li>
                    Designing and building web applications using Laravel.
                  </li>
                  <li>
                    Troubleshooting issues in the implementation and debug
                    builds.
                  </li>
                  <li>
                    Working with front-end and back-end developers on projects.
                  </li>
                  <li>Testing functionality for users and the backend.</li>
                  <li>Ensuring that integrations run smoothly.</li>
                  <li>Scaling projects based on client feedback.</li>
                  <li>Recording and reporting on work done in Laravel.</li>
                  <li>Maintaining web-based applications.</li>
                  <li>
                    Presenting work in meetings with clients and management.
                  </li>
                </ul>
              </div>
            </div>
            <div className="view_apply_btn">
              <div className="apply_btn">
                <JobSubmit1 open={open} setOpen={setOpen} nextFun={setOpen1} />
                <JobSubmit2
                  open={open1}
                  setOpen={setOpen1}
                  nextFun={setOpen2}
                />
                <JobSubmit3 open={open2} setOpen={setOpen2} />
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div class="job_page_footer">
            <p>
              <MdCopyright />
              2022 Jobs Portal. Designed by Wilson Kinyua.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeProfile;
