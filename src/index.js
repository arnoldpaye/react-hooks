import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const TreesContext = createContext();

const trees = [
  { i: "1", type: "Maple" },
  { i: "2", type: "Oak" },
  { i: "3", type: "Family" },
  { i: "4", type: "Component" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
