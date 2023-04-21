import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppComponet } from "../appData/appComponent";
import { AppRoutes } from "./appRoutes";

const CustomRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<AppComponet.Dashboard title="Dashboard" />} path={AppRoutes.DASHBOARD} />
        <Route element={<AppComponet.Calendar title="Calendar" />} path={AppRoutes.CALENDAR} />
      </Routes>
    </Suspense>
  );
};
export default CustomRoutes;
