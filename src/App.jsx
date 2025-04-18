import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppInfo from "./AppInfo";
import DisplayExpenses from "./DisplayExpenses";
import AddExpense from "./AddExpense";

const App = () => {
  return (
    <div className="app-container">
     <header className="app-header">
     <AppInfo />
     </header>
      <main className="main-content">
        < AddExpense />
        <DisplayExpenses />
      </main>
    </div>
  );
};

export default App;
