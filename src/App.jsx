import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppInfo from "./AppInfo";

import DisplayExpenses from "./DisplayExpenses";

const App = () => {
  return (
    <div className="app-container">
      <AppInfo />
      <main className="main-content">
        <DisplayExpenses />
      </main>
    </div>
  );
};

export default App;
