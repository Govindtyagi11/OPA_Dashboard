import React from 'react'

export const GeneralInfo = () => {
  return (
    <>
      <div className="create_heading">Registration Process</div>
      <form>
        <div className="header">General Information</div>
        <div className="student_teacher">
          
          <div className="username">
            <label>Company Name</label>
            <input type="text" />
          </div>
          <div className="username">
            <label>Company website Url</label>
            <input type="url" />
          </div>
          <div className="username">
            <label>About Company</label>
            <textarea rows="4"></textarea>
          </div>
          
        </div>
      </form>
    </>
  );
}
