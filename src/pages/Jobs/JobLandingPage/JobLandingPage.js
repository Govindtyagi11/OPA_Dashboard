import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleChanger from "../../../TitleChanger/TitleChanger";
import { VscChevronRight } from "react-icons/vsc";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { PiCalendarBlankBold } from "react-icons/pi";
import { CgArrowRightO } from "react-icons/cg";
import { MdCopyright } from "react-icons/md";

const JobLandingPage = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="job_page">
      <TitleChanger title="Job" />
      <div className="job_page_body">
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
        <section className="page_title">
          <div className="job_page_title">
            <div className="title">
              <h1>
                Find a <span>Job</span> That <span>Matches</span> Your Passion
              </h1>
            </div>
            <div className="content">
              <p>
                Hand-picked opportunities to work from home, remotely,
                freelance, full-time, part-time, contract and internships.
              </p>
            </div>
            <div>
              <div className="job_input">
                <input
                  type="search"
                  placeholder="Search by job title.................."
                  className="search"
                />
                <button>Search</button>
              </div>
            </div>
          </div>
        </section>
        <section className="job-type">
          <div className="job_page_type">
            <div className="job_page_type_body">
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/remote.png" alt="" />
                </div>
                <p>Remote</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/mnc.png" alt="" />
                </div>
                <p>MNC</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/fresher.png" alt="" />
                </div>
                <p>Freshers</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/marketing.png" alt="" />
                </div>
                <p>Marketing</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/sales.png" alt="" />
                </div>
                <p>Sales</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/project_management.png" alt="" />
                </div>
                <p>Project Management</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/banking.png" alt="" />
                </div>
                <p>Banking & Finance</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/data.png" alt="" />
                </div>
                <p>Data Science</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/engineering.png" alt="" />
                </div>
                <p>Engineering</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/internship.png" alt="" />
                </div>
                <p>Internship</p>
              </div>
              <div className="job_type">
                <div className="job_icon">
                  <img src="assets/job_icon/supply_chain.png" alt="" />
                </div>
                <p>Supply Chain</p>
              </div>
            </div>
          </div>
        </section>
        <section className="top_companies">
          <div className="head">
            <h2>Top Companies hiring now</h2>
          </div>
          <div className="top_companies_body">
            <div className="company_type_card">
              <div className="title">
                <p>MNCs</p>
                <div className="icon">
                  <VscChevronRight
                    style={{ fontWeight: "700", fontSize: "30px" }}
                  />
                </div>
              </div>
              <div className="content">
                <p> 1.9k+ are actively hiring</p>
              </div>
              <div className="company_img">
                <div>
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/ikea.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/h_m.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="company_type_card">
              <div className="title">
                <p>MNCs</p>
                <div className="icon">
                  <VscChevronRight
                    style={{ fontWeight: "700", fontSize: "30px" }}
                  />
                </div>
              </div>
              <div className="content">
                <p> 1.9k+ are actively hiring</p>
              </div>
              <div className="company_img">
                <div>
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/ikea.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/h_m.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="company_type_card">
              <div className="title">
                <p>MNCs</p>
                <div className="icon">
                  <VscChevronRight
                    style={{ fontWeight: "700", fontSize: "30px" }}
                  />
                </div>
              </div>
              <div className="content">
                <p> 1.9k+ are actively hiring</p>
              </div>
              <div className="company_img">
                <div>
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/ikea.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/h_m.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="company_type_card">
              <div className="title">
                <p>MNCs</p>
                <div className="icon">
                  <VscChevronRight
                    style={{ fontWeight: "700", fontSize: "30px" }}
                  />
                </div>
              </div>
              <div className="content">
                <p> 1.9k+ are actively hiring</p>
              </div>
              <div className="company_img">
                <div>
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/ikea.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/h_m.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="company_type_card">
              <div className="title">
                <p>MNCs</p>
                <div className="icon">
                  <VscChevronRight
                    style={{ fontWeight: "700", fontSize: "30px" }}
                  />
                </div>
              </div>
              <div className="content">
                <p> 1.9k+ are actively hiring</p>
              </div>
              <div className="company_img">
                <div>
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/ikea.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/h_m.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="company_type_card">
              <div className="title">
                <p>MNCs</p>
                <div className="icon">
                  <VscChevronRight
                    style={{ fontWeight: "700", fontSize: "30px" }}
                  />
                </div>
              </div>
              <div className="content">
                <p> 1.9k+ are actively hiring</p>
              </div>
              <div className="company_img">
                <div>
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/ikea.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/h_m.png" alt="" />
                </div>
                <div>
                  <img src="assets/job_icon/star.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular_job">
          <div className="head">
            <h2>All Popular Job Listings</h2>
          </div>
          <div className="popular_job_body">
            <div className="popular_job_card">
              <div style={{ display: "flex" }}>
                <div className="logo">
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div className="content">
                  <div className="company_title">
                    <h2>Amazon</h2>
                  </div>
                  <div className="job_title">
                    <h2>Fresher UI/UX Designer (3 Year Exp.)</h2>
                  </div>
                  <div className="job_info">
                    <div className="job_info_detail">
                      <HiOutlineLocationMarker
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Location</span>
                    </div>
                    <div className="job_info_detail">
                      <LiaMoneyBillSolid
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Rs 1,300-1,500 / month</span>
                    </div>
                    <div className="job_info_detail">
                      <PiCalendarBlankBold
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>0-1 years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_btn">
                <Link to="/resume-profile">
                <button>View Details</button>
                </Link>
              </div>
            </div>
            <div className="popular_job_card">
              <div style={{ display: "flex" }}>
                <div className="logo">
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div className="content">
                  <div className="company_title">
                    <h2>Amazon</h2>
                  </div>
                  <div className="job_title">
                    <h2>Fresher UI/UX Designer (3 Year Exp.)</h2>
                  </div>
                  <div className="job_info">
                    <div className="job_info_detail">
                      <HiOutlineLocationMarker
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Location</span>
                    </div>
                    <div className="job_info_detail">
                      <LiaMoneyBillSolid
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Rs 1,300-1,500 / month</span>
                    </div>
                    <div className="job_info_detail">
                      <PiCalendarBlankBold
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>0-1 years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_btn">
                <button>View Details</button>
              </div>
            </div>
            <div className="popular_job_card">
              <div style={{ display: "flex" }}>
                <div className="logo">
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div className="content">
                  <div className="company_title">
                    <h2>Amazon</h2>
                  </div>
                  <div className="job_title">
                    <h2>Fresher UI/UX Designer (3 Year Exp.)</h2>
                  </div>
                  <div className="job_info">
                    <div className="job_info_detail">
                      <HiOutlineLocationMarker
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Location</span>
                    </div>
                    <div className="job_info_detail">
                      <LiaMoneyBillSolid
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Rs 1,300-1,500 / month</span>
                    </div>
                    <div className="job_info_detail">
                      <PiCalendarBlankBold
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>0-1 years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_btn">
                <button>View Details</button>
              </div>
            </div>
            <div className="popular_job_card">
              <div style={{ display: "flex" }}>
                <div className="logo">
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div className="content">
                  <div className="company_title">
                    <h2>Amazon</h2>
                  </div>
                  <div className="job_title">
                    <h2>Fresher UI/UX Designer (3 Year Exp.)</h2>
                  </div>
                  <div className="job_info">
                    <div className="job_info_detail">
                      <HiOutlineLocationMarker
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Location</span>
                    </div>
                    <div className="job_info_detail">
                      <LiaMoneyBillSolid
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Rs 1,300-1,500 / month</span>
                    </div>
                    <div className="job_info_detail">
                      <PiCalendarBlankBold
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>0-1 years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_btn">
                <button>View Details</button>
              </div>
            </div>
            <div className="popular_job_card">
              <div style={{ display: "flex" }}>
                <div className="logo">
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div className="content">
                  <div className="company_title">
                    <h2>Amazon</h2>
                  </div>
                  <div className="job_title">
                    <h2>Fresher UI/UX Designer (3 Year Exp.)</h2>
                  </div>
                  <div className="job_info">
                    <div className="job_info_detail">
                      <HiOutlineLocationMarker
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Location</span>
                    </div>
                    <div className="job_info_detail">
                      <LiaMoneyBillSolid
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Rs 1,300-1,500 / month</span>
                    </div>
                    <div className="job_info_detail">
                      <PiCalendarBlankBold
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>0-1 years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_btn">
                <button>View Details</button>
              </div>
            </div>
            <div className="popular_job_card">
              <div style={{ display: "flex" }}>
                <div className="logo">
                  <img src="assets/job_icon/amazon.png" alt="" />
                </div>
                <div className="content">
                  <div className="company_title">
                    <h2>Amazon</h2>
                  </div>
                  <div className="job_title">
                    <h2>Fresher UI/UX Designer (3 Year Exp.)</h2>
                  </div>
                  <div className="job_info">
                    <div className="job_info_detail">
                      <HiOutlineLocationMarker
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Location</span>
                    </div>
                    <div className="job_info_detail">
                      <LiaMoneyBillSolid
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>Rs 1,300-1,500 / month</span>
                    </div>
                    <div className="job_info_detail">
                      <PiCalendarBlankBold
                        style={{ fontSize: "20px", color: "blueviolet" }}
                      />
                      <span>0-1 years experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_btn">
                <button>View Details</button>
              </div>
            </div>
          </div>
        </section>
        <div className="view_more_btn">
          <div className="btn">
            <button type="">View More</button>
            <CgArrowRightO style={{ fontSize: "20px", paddingLeft: "10px" }} />
          </div>
        </div>
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

export default JobLandingPage;
