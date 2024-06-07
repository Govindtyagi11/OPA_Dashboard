import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <div className="header">
          <h3>Default</h3>
          <p>
            <i className="material-icons">home</i>
            <span>/</span>
            <span>Dashboard </span>
            <span>/</span>
            <span> Default </span>
          </p>
        </div>
        <div className="transaction_selling">
          <div className="latest_transaction">
            <div>
              <h2>Tests</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Subject</td>
                  <td>Task</td>
                  <td>Time</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Chemistry</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Mathematics</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Physics</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Biology</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Mathematics</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Social</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Biology</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Physics</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Geography</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Social</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>
                    <p>Biology</p>
                    <span>Chapter 5/18</span>
                  </td>
                  <td>
                    <p>Daily Task</p>
                    <span>Page 12</span>
                  </td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="best_sellling_product">
            <div className="announcement">
              <div className="announcement_head">
                <h2>Announcements</h2>
              </div>
              <div className="announcement_body">
                <div className="live_session">
                  <div className="person">
                    Hello Shweta, Your live session is about to start
                  </div>
                  <div>
                    <button type="">Join</button>
                  </div>
                </div>
                <div className="live_session">
                  <div className="person">
                    Hello Shweta, Your live session is about to start
                  </div>
                  <div>
                    <button type="">Join</button>
                  </div>
                </div>
                <div className="live_session">
                  <div className="person">
                    Hello Shweta, Your live session is about to start
                  </div>
                  <div>
                    <button type="">Join</button>
                  </div>
                </div>
                <div className="live_session">
                  <div className="person">
                    Hello Shweta, Your live session is about to start
                  </div>
                  <div>
                    <button type="">Join</button>
                  </div>
                </div>
                <div className="live_session">
                  <div className="person">
                    Hello Shweta, Your live session is about to start
                  </div>
                  <div>
                    <button type="">Join</button>
                  </div>
                </div>
                <div className="live_session">
                  <div className="person">
                    Hello Shweta, Your live session is about to start
                  </div>
                  <div>
                    <button type="">Join</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="presentation">
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/lecture.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Lecture for maths</p>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/presentation.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Presentation for physics</p>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/presentation.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Presentation for american geography</p>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/lecture.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Lecture for maths</p>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/presentation.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Presentation for Quantum physics</p>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/lecture.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Lecture for Chemical equations</p>
                  <span>Coming soon</span>
                </div>
              </div>
              <div className="lecture">
                <div className="pre_profile">
                  <img src="/assets/images/presentation.png" alt="" />
                </div>
                <div className="text_profile">
                  <p>Presentation for maths</p>
                  <span>Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_library">
          <div className="head">
            <p>Library</p>
            <Link to="/app/library">
              <p>See More</p>
            </Link>
          </div>
          <div className="library_card">
            {data.map((d) => (
              <div className="book_card">
                <div className="book_image">
                  <img src={d.img} alt="" />
                </div>
                <div className="book_footer">
                  <p>{d.para}</p>
                  <img src="/assets/images/download.png" alt="" />
                </div>
              </div>
            ))}
            {/* <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/chemistry.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Chemistry</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/inorganic_chemistry.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Inorganic Chemistry</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/physics.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Physics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/maths.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Mathematics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/english.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Learn English</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/physics_pr.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Principles of  Physics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/gen_english.png" alt="" />
              </div>
              <div className="book_footer">
                <p>General English</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div>
            <div className="book_card">
              <div className="book_image">
                <img src="/assets/images/mathss.png" alt="" />
              </div>
              <div className="book_footer">
                <p>Mathematics</p>
                <img src="/assets/images/download.png" alt="" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="home_course">
          <div className="head">
            <p>Courses</p>
            <Link to="/app/courses">
              <p>See More</p>
            </Link>
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
          </div>
        </div>
        {/* <div className="card">
          <div className="card_1">
            <h3>Revenue Growth</h3>
            <p>Marketing Sale</p>
          </div>
          <div className="card_2">
            <div className="card_2_">
              <img
                src="/assets/images/boostup1.png"
                alt=""
                className="img-boostup-img-1"
              />
              <img
                src="/assets/images/boostup1.png"
                alt=""
                className="img-boostup-img-2"
              />
              <h3>Boost up your...</h3>
              <p>by upgrading your...</p>
              <input type="button" value="Upgrade Now" />
            </div>
            <div className="card_2__">
              <div className="delivery_head">
                <h3>Deliveries</h3>
                <i className="material-icons">more_horiz</i>
              </div>
              <div className="head_del">
                <p>Particular</p>
                <p>Total Amount</p>
              </div>
              <div className="head_">
                <p>On Time Delivery</p>
                <span>$15,256</span>
              </div>
              <div className="head_">
                <p>Delayed Delivery</p>
                <span>$15,256</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product_new">
          <div className="top_product">
            <div className="top_product_head">
              <h2>Top Product</h2>
            </div>
            <div className="product">
              <div className="product_img">
                <img src="/assets/images/1.png" alt="" />
              </div>
              <div className="product_menu">
                <div className="product_detail">
                  <div className="product_no">
                    <span>SKU90400</span>
                  </div>
                  <p>Noise Smartwatch</p>
                  <p>
                    <span>$230</span>
                  </p>
                </div>
                <div className="product_items">
                  <div className="product_items_list">
                    <p>QTY</p>
                    <span>:</span>
                    <span>12</span>
                  </div>
                  <div className="product_items_list">
                    <p>Revenue</p>
                    <span>:</span>
                    <span>$51</span>
                  </div>
                  <div className="product_items_list">
                    <p>Profit</p>
                    <span>:</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="product_img">
                <img src="/assets/images/2.png" alt="" />
              </div>
              <div className="product_menu">
                <div className="product_detail">
                  <div className="product_no">
                    <span>SKU98370</span>
                  </div>
                  <p>Puma Shoes</p>
                  <p>
                    <span>$135</span>
                  </p>
                </div>
                <div className="product_items">
                  <div className="product_items_list">
                    <p>QTY</p>
                    <span>:</span>
                    <span>12</span>
                  </div>
                  <div className="product_items_list">
                    <p>Revenue</p>
                    <span>:</span>
                    <span>$51</span>
                  </div>
                  <div className="product_items_list">
                    <p>Profit</p>
                    <span>:</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="product_img">
                <img src="/assets/images/3.png" alt="" />
              </div>
              <div className="product_menu">
                <div className="product_detail">
                  <div className="product_no">
                    <span>SKU90694</span>
                  </div>
                  <p>Boat Headphone</p>
                  <p>
                    <span>$325</span>
                  </p>
                </div>
                <div className="product_items">
                  <div className="product_items_list">
                    <p>QTY</p>
                    <span>:</span>
                    <span>12</span>
                  </div>
                  <div className="product_items_list">
                    <p>Revenue</p>
                    <span>:</span>
                    <span>$51</span>
                  </div>
                  <div className="product_items_list">
                    <p>Profit</p>
                    <span>:</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="product_img">
                <img src="/assets/images/4.png" alt="" />
              </div>
              <div className="product_menu">
                <div className="product_detail">
                  <div className="product_no">
                    <span>SKU95920</span>
                  </div>
                  <p>Anime White Shirt</p>
                  <p>
                    <span>$156</span>
                  </p>
                </div>
                <div className="product_items">
                  <div className="product_items_list">
                    <p>QTY</p>
                    <span>:</span>
                    <span>12</span>
                  </div>
                  <div className="product_items_list">
                    <p>Revenue</p>
                    <span>:</span>
                    <span>$51</span>
                  </div>
                  <div className="product_items_list">
                    <p>Profit</p>
                    <span>:</span>
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new_user">
            <div className="new_user_head">
              <h2>New User</h2>
            </div>
            <div className="topnewuser">
              <div className="userimg">
                <img src="/assets/images/new_user1.png" alt="" />
              </div>
              <div className="user_detail">
                <div className="user_detail_name">
                  <h3>Smith John</h3>
                  <span>India</span>
                </div>
                <div>
                  <i className="material-icons">more_vert</i>
                </div>
              </div>
            </div>
            <div className="topnewuser">
              <div className="userimg">
                <img src="/assets/images/new_user2.png" alt="" />
              </div>
              <div className="user_detail">
                <div className="user_detail_name">
                  <h3>Robert Fox</h3>
                  <span>Afghanistan</span>
                </div>
                <div>
                  <i className="material-icons">more_vert</i>
                </div>
              </div>
            </div>
            <div className="topnewuser">
              <div className="userimg">
                <img src="/assets/images/new_user3.png" alt="" />
              </div>
              <div className="user_detail">
                <div className="user_detail_name">
                  <h3>Darlene Robtson</h3>
                  <span>Georgia</span>
                </div>
                <div>
                  <i className="material-icons">more_vert</i>
                </div>
              </div>
            </div>
            <div className="topnewuser">
              <div className="userimg">
                <img src="/assets/images/new_user4.png" alt="" />
              </div>
              <div className="user_detail">
                <div className="user_detail_name">
                  <h3>Floyd Miles</h3>
                  <span>Pakistan</span>
                </div>
                <div>
                  <i className="material-icons">more_vert</i>
                </div>
              </div>
            </div>
            <div className="topnewuser">
              <div className="userimg">
                <img src="/assets/images/new_user5.png" alt="" />
              </div>
              <div className="user_detail">
                <div className="user_detail_name">
                  <h3>Jacob Jones</h3>
                  <span>Monaco</span>
                </div>
                <div>
                  <i className="material-icons">more_vert</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team_visits">
          <div className="team_activity">
            <div>
              <h2>Team Activity</h2>
            </div>
            <div className="team_activity_ins">
              <div className="user_activity">
                <div className="team_activity_img">
                  <img src="/assets/images/team_1.png" alt="" />
                </div>
              </div>
              <div className="team_activity_time">5 min ago</div>
              <div className="team_activity_status">
                Floyd has moved to the warehouse
              </div>
            </div>
            <hr />
            <div className="team_activity_ins">
              <div className="user_activity">
                <div className="team_activity_img">
                  <img src="/assets/images/team_2.png" alt="" />
                </div>
              </div>
              <div className="team_activity_time">6 min ago</div>
              <div className="team_activity_status">
                Ralph has solved Mr.williams project.
              </div>
            </div>
            <hr />
            <div className="team_activity_ins">
              <div className="user_activity">
                <div className="team_activity_img">
                  <img src="/assets/images/team_3.png" alt="" />
                </div>
              </div>
              <div className="team_activity_time">10 min ago</div>
              <div className="team_activity_status">
                Esther has changed his to active, now.
              </div>
            </div>
            <hr />
            <div className="team_activity_ins">
              <div className="user_activity">
                <div className="team_activity_img">
                  <img src="/assets/images/team_4.png" alt="" />
                </div>
              </div>
              <div className="team_activity_time">11 min ago</div>
              <div className="team_activity_status">
                Jacob has make changes in sold it.
              </div>
            </div>
            <hr />
            <div className="team_activity_ins">
              <div className="user_activity">
                <div className="team_activity_img">
                  <img src="/assets/images/team_5.png" alt="" />
                </div>
              </div>
              <div className="team_activity_time">12 min ago</div>
              <div className="team_activity_status">
                Theresa has complete old task and new one.
              </div>
            </div>
            <hr />
            <div className="team_activity_ins">
              <div className="user_activity">
                <div className="team_activity_img">
                  <img src="/assets/images/team_6.png" alt="" />
                </div>
              </div>
              <div className="team_activity_time">12 min ago</div>
              <div className="team_activity_status">
                Annette has send all the stock to department.
              </div>
            </div>
          </div>
          <div className="user_visits">
            <div>
              <h2>User Visits by Day</h2>
            </div>
            <div className="most_visited">
              <div>
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "25px",
                  }}
                >
                  Most Visited Day
                </h4>
                <p style={{ color: "grey", fontWeight: "500" }}>
                  Total 59.6k visits on Sunday{" "}
                </p>
              </div>
              <div>
                <div className="most_visited_icon">
                  <i className="material-icons">chevron_right</i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

const data = [
  {
    img : '/assets/images/chemistry.png',
    para: 'Chemistry'
  },
  {
    img : '/assets/images/inorganic_chemistry.png',
    para: 'Inorganic Chemistry'
  },
  {
    img : '/assets/images/physics.png',
    para: 'Physics'
  },
  {
    img : '/assets/images/maths.png',
    para: 'Mathematics'
  },
  {
    img : '/assets/images/english.png',
    para: 'Learn English'
  },
  {
    img : '/assets/images/physics_pr.png',
    para: 'Principles of  Physics'
  },
  {
    img : '/assets/images/gen_english.png',
    para: 'General English'
  },
  {
    img : '/assets/images/mathss.png',
    para: 'Mathematics'
  },
]

export default Home;
