import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/Routes";
import "./scss/app.scss"
export default function App() {
  return (
      <BrowserRouter>
        <Suspense>
          <CustomRoutes />
        </Suspense>
      </BrowserRouter>
  );
}
