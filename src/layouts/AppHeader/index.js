import React, { useState } from "react";
import { AppImages } from "../../appData/appImages";
import "./appHeader.scss";
import { AppData } from "../../appData/appData";
import ProfileMenu from "../../components/ProfileMenu";
const AppHeader = (props) => {
  const { sidebarWidth } = props
  console.log(sidebarWidth)
  const [toggle, setToggle] = useState(false)
  return (
    <div className="app-header">
      <div className="brand-logo" style={{ width: `${sidebarWidth / 16}rem` }}><img src={AppImages.BrandLogo} alt="logo" /> <span>Company Logo</span>
      </div>
      <div className="right-menu ml-auto">
        {AppData?.Header?.length > 0 && AppData?.Header?.map((val, i) => (
          <React.Fragment key={i}>
            <div className="profile-item" onClick={() => setToggle(!toggle)}>
              <div className="icon">{val.icon}</div>
              <div className="nav-link">{val.name}</div>
              {toggle && <ProfileMenu data={val.subMenu} style={{ top: '3.5rem' }} />}
            </div>
          </React.Fragment>

        ))}
      </div>
    </div>);
};

export default AppHeader;
