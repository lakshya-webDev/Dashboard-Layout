import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppData } from "../../appData/appData";
import "./appSidebar.scss";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
const AppSidebar = () => {
  const [toggle,setToggle] =useState(false)
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-listing">
        {AppData.Sidebar.length > 0 &&
          AppData.Sidebar.map((val, i) => (
            <div className="sidebar-item">
              <Link to={val.url} key={i} className="nav-link">
                <div className="icon">{val.icon}</div>
                <div className="link">{val.name}</div>
                {val?.subCategory?.length > 0 &&
                  <div className="drop-icon" style={{ transform: toggle && `rotate(180deg)`, transition: '.3ms ease-in-out' }} onClick={() => setToggle(!toggle)}>
                  <MdOutlineKeyboardArrowDown/></div>}
              </Link>
              {toggle &&
                val?.subCategory?.length > 0 &&
                <div className="subItem-listing">
                  {val?.subCategory?.length > 0 && val?.subCategory?.map((val, i) => (
                    <div className="sub-item" key={i}>
                      <Link to={val.url} className="nav-link">
                        <div className="link">{val.name}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default AppSidebar;
