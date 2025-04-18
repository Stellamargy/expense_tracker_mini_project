import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppInfo from "./AppInfo";
import AddExpense from "./AddExpense";
import DisplayExpenses from "./DisplayExpenses";

const App = () => {
  return (
    <div className="app-container">
      <h2>Header</h2>
      <AppInfo />
      <main className="main-content">
        <h2>Main Section</h2>
        <AddExpense />
        <DisplayExpenses />
      </main>
    </div>
  );
};

export default App;
