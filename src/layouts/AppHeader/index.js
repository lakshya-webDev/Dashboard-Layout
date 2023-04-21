import React, { useState } from "react";
import { AppImages } from "../../appData/appImages";
import "./appHeader.scss";
import { AppData } from "../../appData/appData";
import Dropdown from "../../components/Dropdown";
const AppHeader = (props) => {
  const { sidebarWidth } = props
  const [toggle, setToggle] = useState(false)
  return (
    <div className="app-header">
      <div className="brand-logo" style={{ width: `${sidebarWidth / 16}rem` }}><img src={AppImages.BrandLogo} alt="logo" /> <span>Company Logo</span>
      </div>
      <div className="right-menu ml-auto">
        {AppData?.Header?.length > 0 && AppData?.Header?.map((val, i) => (
          <>
            <div className="profile-item" key={i} onClick={() => setToggle(!toggle)}>
              <div className="icon">{val.icon}</div>
              <div className="nav-link">{val.name}</div>
              {toggle && <Dropdown data={val.subMenu} />}
            </div>
          </>

        ))}
      </div>
    </div>);
};

export default AppHeader;
