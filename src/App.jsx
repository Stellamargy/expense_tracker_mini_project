import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppInfo from "./AppInfo";
import DisplayExpenses from "./DisplayExpenses";
import AddExpense from "./AddExpense";

const App = () => {
  return (
    <div className="app-container ">
      <div className="app-wrapper h-100  d-flex flex-column ">
        <header className="app-header  w-100 d-flex flex-column  justify-content-center">
          <AppInfo />
        </header>

        <main className="main-content flex-grow-1  d-flex flex-row">
          <AddExpense />
          <DisplayExpenses />
        </main>
      </div>
    </div>
  );
};

export default App;
