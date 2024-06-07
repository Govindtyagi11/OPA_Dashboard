import React from 'react'
import Breadcrumb from "../../../components/Breadcrumb";
import TitleChanger from '../../../TitleChanger/TitleChanger';

const Courses = () => {
    return (
      <div>
        <TitleChanger title="Courses" />
        <Breadcrumb pageTitle="Courses" />
        <div className="home_course course_page">
          <div className="head">
            <p>All Courses (12)</p>
            <p>Ongoing (5)</p>
            <p>Completed (2)</p>
          </div>
          <div className="home_card">
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/math_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Maths Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Mathematics is the science and study of quality, structure,
                space, and change.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/chem_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Chemistry Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Chemistry is the scientific study of the properties and behavior
                of matter.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/physics_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Physics Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Physics is the scientific study of physical like motion of
                matter and energy and force.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/bio_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Biology Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Biology is a natural science discipline that studies living
                things.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/sst_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Social Science Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Social science is the study of how people interact with one
                another.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/history_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>History Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>History is by historians who try to make sense of the past.</p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/business_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Business Studies Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Business Studies deals with the various aspects of business
                management, such as finance, marketing and production.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/finance_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Finance Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Financing is the process of funding business activities, making
                purchases, or investments.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/geo_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Geography Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Geography is the study of places and the relationships between
                people and their environments.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/polity_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Political Science Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Political science is the study of politics and power from
                domestic, international, and comparative perspectives.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/computer_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Computer Science Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                Computer science focuses on the development and testing of
                software and software systems.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
            <div className="course_card">
              <div className="course_image">
                <img src="/assets/images/entrepreneur_dep.png" alt="" />
              </div>
              <div className="course_profile">
                <p>Entrepreneurship Department</p>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
              <p>
                An entrepreneur is someone who organizes, manages, and assumes
                the risks of a business or enterprise.
              </p>
              <div className="course_btn">
                <button type="">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Courses