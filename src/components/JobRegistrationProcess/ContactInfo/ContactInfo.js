import React from 'react'

export const ContactInfo = () => {
  return (
    <>
      <div className="create_heading">Registration Process</div>
      <form>
        <div className="header">Contact Information</div>
        <div className="student_teacher">
          <div className="username">
            <label>Company Type</label>
            <input type="text" />
          </div>
          <div className="radio_btn">
            <div className="username">
              <label>Company Size</label>
            </div>
            <div>
              <input type="radio" id="0to50" name="employees" />
              <label for="student">0-50 employees</label>
            </div>
            <div>
              <input type="radio" id="50to100" name="employees" />
              <label for="teacher">50-100 employees</label>
            </div>
            <div>
              <input type="radio" id="200to500" name="employees" />
              <label for="teacher">200-500 employees</label>
            </div>
            <div>
              <input type="radio" id="500to1000" name="employees" />
              <label for="teacher">500-1000 employees</label>
            </div>
          </div>
          <div className="username">
            <label>Company Full Address</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </>
  );
}
