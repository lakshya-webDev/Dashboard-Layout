import React, { Children, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppComponent } from "../../appData/appComponent";
import "./appLayout.scss"
const AppLayout = ({ children, appHeader, appFooter, appSidebar }) => {
  const [sidebarWidth, setSidebarWidth] = useState(null)
  React.useEffect(() => {
    const appHeaderWidth = document.querySelector(".sidebar-wrapper");
    if (appHeaderWidth) {
      setSidebarWidth(appHeaderWidth.getBoundingClientRect().width);
    }
  }, []);
  return (
    <>
      {appHeader && <AppComponent.AppHeader sidebarWidth={sidebarWidth} />}
      <div className="app-main-wrapper">
        {appSidebar && <AppComponent.AppSidebar />}
          <div id="main" className="content-wrapper">
          <div className="content">
            {children} <Outlet />

          </div>
      {appFooter &&
        <footer className="app-footer">
              <AppComponent.AppFooter />
        </footer>
      }
        </div>
      </div>
    </>
  );
};

export default AppLayout;
