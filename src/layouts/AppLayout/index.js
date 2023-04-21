import React, { Children, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppComponet } from "../../appData/appComponent";
import "./appLayout.scss"
const AppLayout = ({ children, appHeader, appFooter, appSiidebar }) => {
  const [sidebarWidth, setSidebarWidth] = useState(null)
  React.useEffect(() => {
    const appHeaderWidth = document.querySelector(".sidebar-wrapper");
    if (appHeaderWidth) {
      setSidebarWidth(appHeaderWidth.getBoundingClientRect().width);
    }
  }, []);
  return (
    <>
      {appHeader && <AppComponet.AppHeader sidebarWidth={sidebarWidth} />}
      <div className="app-main-wrapper">
        {appSiidebar && <AppComponet.AppSidebar />}
          <div id="main" className="content-wrapper">
        {children} <Outlet />
        </div>
      </div>
      {appFooter &&
        <footer className="app-footer">
          <AppComponet.AppFooter />
        </footer>
      }
    </>
  );
};

export default AppLayout;
