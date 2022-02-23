import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterManagement from "./components/CounterManagement";

function App() {
  return (
    <>
      <h1>My React Application</h1>
      <CounterManagement ownerName="Hazzim"></CounterManagement>
    </>
  );
}

export default App;
