import { FC } from "react";
import { ReactElement, ReactNode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App: FC<ReactNode> = ({ children }) {
  return <div>{children}</div>;
}

export default App;
