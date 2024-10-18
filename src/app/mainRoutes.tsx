import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { PageSuspense, Message } from "../shared/ui";

import App from "./App";

const EmployeeCreatePage = lazy(() => import("../pages/EmployeeCreatePage"));

const EmployeeEditPage = lazy(() => import("../pages/EmployeeEditPage"));

const EmployeeListPage = lazy(() => import("../pages/EmployeeListPage"));

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

          <Route
            path="*"
            element={<Message>По данному маршруту не найдено данных</Message>}
          />
        </Route>
      </Routes>
    ),
  },
]);

export default MainRoutes;
