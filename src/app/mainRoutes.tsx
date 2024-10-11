import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { PageSuspense } from "../shared/ui";

import App from "./App";

const EmployeeCreatePage = lazy(
  () => import("../features/AddEmployee/EmployeeCreatePage")
);

const EmployeeEditPage = lazy(
  () => import("../features/EditEmployee/EmployeeEditPage")
);
const EmployeeListPage = lazy(
  () => import("../features/ViewEmployees/EmployeeListPage")
);

const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: (
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/employee/" />} />
          <Route
            path="/employee"
            element={
              <PageSuspense>
                <EmployeeListPage />
              </PageSuspense>
            }
          />
          <Route
            path="/employee/edit/:id"
            element={
              <PageSuspense>
                <EmployeeEditPage />
              </PageSuspense>
            }
          />
          <Route
            path="employee/new"
            element={
              <PageSuspense>
                <EmployeeCreatePage />
              </PageSuspense>
            }
          />
          <Route path="*" element={<h1>Неизвестный роут</h1>} />
        </Route>
      </Routes>
    ),
  },
]);

export default MainRoutes;
