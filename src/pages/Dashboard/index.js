import React from "react";
import { AppComponet } from "../../appData/appComponent";
const Dashboard = (props) => {
  const { title } = props
  return (
    <AppComponet.AppLayout appHeader={true} appFooter={true} appSiidebar={true} >
      <div className={`${title}`}>
        <h1>{title}</h1>
      </div>
    </AppComponet.AppLayout>
  );
};
export default Dashboard;
