import React from "react";
import SideBarRoute from "../../routes/Sidebar";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

function Sidebar({ isVisible, toggleSidebar }) {
  return (
    <>
      <div  className={`sidebar ${isVisible ? "visible" : "hidden"}`}>
      <div className="sidebar_hide_btn" onClick={toggleSidebar}>
          <MdClose />
        </div>
        <div className="side_header">
          <img src="/assets/images/opa_logo.png" alt="LOGO" />
          <div>OSOGBO Professionals Associations</div>
        </div>
        <hr />
        <div className="side_comp">
          <div className="side_comp_head">
            <h4>GENERAL</h4>
          </div>
          <ul>
            {SideBarRoute?.map((route, i) => (
              <li key={i}>
                <Link to={route.path} className="side_comp_cont">
                  <div className="icon">{route.icon}</div>
                  <span>{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
