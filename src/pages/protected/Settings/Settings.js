import React from 'react'
import TitleChanger from '../../../TitleChanger/TitleChanger';
import Breadcrumb from "../../../components/Breadcrumb";

 const Settings = () => {
  return (
    <div>
      <TitleChanger title="Settings" />
      <Breadcrumb pageTitle="Settings" />
      <div className="setting course_create_page">
        <div className="setting_form1">
          <div>
            <form>
              <div className="header">
                <p>General Information</p>
                <button>Edit</button>
              </div>
              <div className="student_teacher">
                <p>Create Account as</p>
                <div className="radio_btn">
                  <div>
                    <input type="radio" id="student" name="student_teacher" />
                    <label for="student">As Student</label>
                  </div>
                  <div>
                    <input type="radio" id="teacher" name="student_teacher" />
                    <label for="teacher">As Teacher</label>
                  </div>
                </div>
                <div className="username">
                  <label>User name</label>
                  <input type="text" />
                </div>
                <div className="username">
                  <label>First name</label>
                  <input type="text" />
                </div>
                <div className="username">
                  <label>Last name</label>
                  <input type="text" />
                </div>
                <div className="username">
                  <label>Email</label>
                  <input type="email" />
                </div>
              </div>
            </form>
          </div>
          <div>
            <form>
              <div className="header">
                <p>Contact Information</p>
                <button>Edit</button>
              </div>
              <div className="student_teacher">
                <div className="username">
                  <label>Address</label>
                  <input type="text" />
                </div>
                <div className="username">
                  <label>City</label>
                  <input type="text" />
                </div>
                <div className="username">
                  <label>Country</label>
                  <input type="text" />
                </div>
                <div className="username">
                  <label>Pin Code</label>
                  <input type="number" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="setting_form2">
          <div className="upload_photo">
            <div className="change_photo">
              <div className="upload_image">
                <img
                  src="/assets/images/receiver-img.jpg"
                  className=""
                  alt=""
                />
              </div>
              <div className="change_btn">
                <button>Change Photo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="save_btn">
        <button>Save Changes</button>
      </div>
    </div>
  );
}
export default Settings;