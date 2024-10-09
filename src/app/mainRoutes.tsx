import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import App from "./App";

import EmployeeCreatePage from "../pages/EmployeeCreatePage";
import EmployeeEditPage from "../pages/EmployeeEditPage";
import EmployeeListPage from "../pages/EmployeeListPage";

const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: (
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Работа с сотрудниками </h1>} />
          <Route path="/employee" element={<EmployeeListPage />} />
          <Route path="/employee/edit/:id" element={<EmployeeEditPage />} />
          <Route path="employee/new" element={<EmployeeCreatePage />} />
          <Route path="*" element={<h1>Неизвестный роут</h1>} />
        </Route>
      </Routes>
    ),
  },
]);

export default MainRoutes;
