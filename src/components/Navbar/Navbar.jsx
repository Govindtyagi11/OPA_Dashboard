import React from "react";

function Navbar({ isSidebarVisible, toggleSidebar }) {
  const handlerLogOut = () => {
    localStorage.removeItem("token_tr")
    window.location.href = '/'
  }

  return (
    <>
      <div className="navbar dashboard_home">
        <div className="sidebar_show_btn" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-center status_toggle middle sidebar-toggle"
          >
            <line x1="18" y1="10" x2="6" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="18" y1="18" x2="6" y2="18"></line>
          </svg>
        </div>
        <div className="logo">
          <h4>Welcome Alex, Mohd Alam</h4>
          <p>Here's what's happening with your store today</p>
        </div>
        <div>
          <ul>
            <li>
              <div className="nav_input">
                <i className="material-icons search_icon">search</i>
                <input type="search" placeholder="Search" className="search" />
              </div>
            </li>
            <li className="bookmark_li">
              <div className="nav_icon">
                <i className="material-icons search_icon">star</i>
              </div>
              <div className="nav_hovered">
                <div className="nav_hovered_head">
                  <h2>Bookmark</h2>
                </div>
                <hr />
                <div className="nav_con">
                  <div className="nav_con_">
                    <div className="nav_con_img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-file-text"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <p>Forms</p>
                  </div>
                  <div className="nav_con_">
                    <div className="nav_con_img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <p>Profile</p>
                  </div>
                  <div className="nav_con_">
                    <div className="nav_con_img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-server"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <rect
                          x="2"
                          y="14"
                          width="20"
                          height="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="6" y1="6" x2="6" y2="6"></line>
                        <line x1="6" y1="18" x2="6" y2="18"></line>
                      </svg>
                    </div>
                    <p>Tables</p>
                  </div>
                </div>
                <div className="nav_con_foot">
                  <h2>Add New Bookmark</h2>
                </div>
              </div>
            </li>
            <li>
              <div className="nav_icon">
                <i className="material-icons search_icon">dark_mode</i>
              </div>
            </li>
            <li className="notification_li">
              <div className="nav_icon">
                <i className="material-icons search_icon">notifications</i>
              </div>
              <div className="notification_dropdown">
                <div className="notification_dropdown_head">
                  <h2>Notifications</h2>
                  <p>4 New</p>
                </div>
                <hr />
                <div className="notification_dropdown_body">
                  <ul>
                    <li>All</li>
                    <li>Messages</li>
                    <li>Cart</li>
                  </ul>
                  <div className="all_notification_product">
                    <div className="all_notification_product_img">
                      <img src="/assets/images/receiver-img.jpg" alt="" />
                    </div>
                    <div className="all_notification_product_details">
                      <h2 className="head">Men Blue T-Shirt</h2>
                      <div className="notification_quantity_box">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                      <h2 className="price">$695.00</h2>
                    </div>
                    <div className="all_notification_product_cancel">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <hr />
                  <div className="notify_user_detail">
                    <div className="notify_user_detail_img">
                      <img src="/assets/images/user1.jpg" alt="" />
                    </div>
                    <div className="notify_user_detail_mes">
                      <h2>Floyd Miles</h2>
                      <p>Sir, Can i remove part in des...</p>
                    </div>
                    <div className="notify_user_detail_icon">
                      <i className="material-icons">more_vert</i>
                    </div>
                  </div>
                  <hr />
                  <div className="notify_user_detail">
                    <div className="notify_user_detail_img">
                      <img src="/assets/images/user1.jpg" alt="" />
                    </div>
                    <div className="notify_user_detail_mes">
                      <h2>Floyd Miles</h2>
                      <p>Sir, Can i remove part in des...</p>
                    </div>
                    <div className="notify_user_detail_icon">
                      <i className="material-icons">more_vert</i>
                    </div>
                  </div>
                  <hr />
                  <div className="notification_dropdown_btn">
                    <input type="button" value="Check all" />
                  </div>
                </div>
              </div>
            </li>
            <li className="profile_li">
              <div className="nav_icon ">
                <img
                  src="/assets/images/profile.png"
                  className="nav_profile"
                  alt=""
                />
              </div>
              <div className="nav_profile_con">
                <div className="profile_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <p>My Profile</p>
                </div>
                <hr />
                <div className="profile_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <p>Inbox</p>
                </div>
                <hr />
                <div className="profile_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-settings"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <p>Settings</p>
                </div>
                <hr />
                <div className="profile_content">
                  <input onClick={handlerLogOut} type="button" value="Logout" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
