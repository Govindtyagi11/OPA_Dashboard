import React from 'react'

export const GeneralInfo = () => {
  return (
    <>
      <div className="create_heading">Registration Process</div>
      <form>
        <div className="header">General Information</div>
        <div className="student_teacher">
          <p>Create Account as</p>
          <div className="radio_btn">
            <div>
              <input type="radio" id='student' name="student_teacher" />
              <label for="student" >As Student</label>
            </div>
            <div>
              <input type="radio" id='teacher' name="student_teacher" />
              <label for="teacher" >As Teacher</label>
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
    </>
  );
}
