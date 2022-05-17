import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export const TreeContext = createContext();

const trees = [
  { i: "1", type: "Maple" },
  { i: "2", type: "Oak" },
  { i: "3", type: "Family" },
  { i: "4", type: "Component" },
];

function App() {
  return (
    <div>
      <h1>Trees I've Heard Of</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TreeContext.Provider value={{ trees }}>
    <App />
  </TreeContext.Provider>
);
