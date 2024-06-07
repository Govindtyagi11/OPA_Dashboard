import React from 'react'

export const ProfileInfo = () => {
  return (
    <>
      <div className="create_heading">Registration Process</div>
      <div className="upload_photo">
        <div className="heading">Upload Photo</div>
        <div className="change_photo">
          <div className="upload_image">
            <img src="assets/images/receiver-img.jpg" className="" alt="" />
          </div>
          <div className="change_btn">
            <button>Change Photo</button>
          </div>
        </div>
        <div className="submit_btn">
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}
