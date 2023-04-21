import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppComponent } from "../appData/appComponent";
import { AppRoutes } from "./appRoutes";

const CustomRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<AppComponent.Dashboard title="Dashboard" />} path={AppRoutes.BASE_URL} />
        <Route element={<AppComponent.Dashboard title="Dashboard" />} path={AppRoutes.DASHBOARD} />
        <Route element={<AppComponent.Calendar title="Calendar" />} path={AppRoutes.CALENDAR} />
        <Route element={<AppComponent.DataTable title="DataTable" />} path={AppRoutes.DATA_TABLE} />
        <Route element={<AppComponent.Components title="Components" />} >
          <Route element={<AppComponent.Cards title="Cards" />} path={AppRoutes.COMPONENT_CARD} />
          <Route element={<AppComponent.Buttons title="Buttons" />} path={AppRoutes.COMPONENT_BUTTON} />
        </Route>
        <Route element={<AppComponent.Settings title="Settings" />} path={AppRoutes.SETTINGS} />
      </Routes>
    </Suspense>
  );
};
export default CustomRoutes;
