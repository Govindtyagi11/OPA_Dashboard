import React from "react";
import TitleChanger from "../../../TitleChanger/TitleChanger";
import Breadcrumb from "../../../components/Breadcrumb";
import { HiPhone } from "react-icons/hi";
import { IoMdVideocam } from "react-icons/io";
import { VscChevronRight } from "react-icons/vsc";


const Messages = () => {
  return (
    <>
      <TitleChanger title="Messages" />
      <Breadcrumb pageTitle="Messages" />
      <div className="message_page">
        <div className="msg_sidebar">
          <div className="head">
            <div className="msg_input">
              <i className="material-icons search_icon">search</i>
              <input type="search" placeholder="Search" className="search" />
            </div>
            <div className="tabs">
              <button>Chats</button>
              <button>Groups</button>
            </div>
          </div>
          <div className="msg_body">
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/profile.png" alt="" />
                  <div className="profile_name">
                    <h2>John Doe</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">1 min</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/course_profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Peter Parker</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">5 min</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8 " }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Harry</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">1 hr</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/course_profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Ellisa</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">1 day</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/profile.png" alt="" />
                  <div className="profile_name">
                    <h2>John Doe</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">5 hr</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/course_profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Venice</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">1 hr</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Tom Clancy</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">1 day</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/course_profile.png" alt="" />
                  <div className="profile_name">
                    <h2>John Doe</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">5 min</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Venice</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">10 min</div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #e2d8d8" }}>
              <div className="profile_sidebar">
                <div className="profile_img">
                  <img src="/assets/images/course_profile.png" alt="" />
                  <div className="profile_name">
                    <h2>Tom Clancy</h2>
                    <p>Student</p>
                  </div>
                </div>
                <div className="profile_active">1 min</div>
              </div>
            </div>
          </div>
        </div>
        <div className="msg_main">
          <div className="profile_head">
          <div className="head">
            <div className="profile_img">
              <div>
                <img src="/assets/images/profile.png" alt="" />
              </div>
              <div className="profile_name">
                <h2>John Doe</h2>
                <p>Online</p>
              </div>
            </div>
            <div className="audio_video">
              <div>
                <HiPhone className="audio_icon" />
              </div>
              <div>
                <IoMdVideocam className="video_icon" />
              </div>
            </div>
            </div>
          </div>
          <div className="profile_body">
            <div className="msg_receive">
              <div>
                <img src="/assets/images/profile.png" alt="" />
              </div>
              <div className="text_receive">Hi There!</div>
            </div>
            <div className="msg_send">
              <div className="text_send">Hi...</div>
              <div>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
            </div>
            <div className="msg_receive">
              <div>
                <img src="/assets/images/profile.png" alt="" />
              </div>
              <div className="text_receive">How are you...?</div>
            </div>
            <div className="msg_send">
              <div className="text_send">I am Fine..nd How are u?</div>
              <div>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
            </div>
            <div className="msg_receive">
              <div>
                <img src="/assets/images/profile.png" alt="" />
              </div>
              <div className="text_receive">Good</div>
            </div>
            <div className="msg_send">
              <div className="text_send">Sent</div>
              <div>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
            </div>
            <div className="msg_receive">
              <div>
                <img src="/assets/images/profile.png" alt="" />
              </div>
              <div className="text_receive">Received</div>
            </div>
            <div className="msg_send">
              <div className="text_send">Sent</div>
              <div>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
            </div>
            <div className="msg_receive">
              <div>
                <img src="/assets/images/profile.png" alt="" />
              </div>
              <div className="text_receive">Received</div>
            </div>
            <div className="msg_send">
              <div className="text_send">Sent</div>
              <div>
                <img src="/assets/images/course_profile.png" alt="" />
              </div>
            </div>
          </div>
          <div className="profile_footer">
            <div className="msg_typed">
              <input type="text" placeholder="Type here" className="msg_text" />
              <div className="msg_sent">
              <VscChevronRight className="msg_sent_icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Messages;
