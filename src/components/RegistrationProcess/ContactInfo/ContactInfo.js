import React from 'react'

export const ContactInfo = () => {
  return (
    <>
      <div className="create_heading">Registration Process</div>
      <form>
        <div className="header">Contact Information</div>
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
    </>
  );
}
