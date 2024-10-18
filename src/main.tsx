import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import MainRoutes from "./app/mainRoutes";

import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={MainRoutes} />
  </Provider>
);
