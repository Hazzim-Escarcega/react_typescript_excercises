import React from "react";
import "./App.css";
import CounterManagement from "./components/CounterManagement";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>My React Application</h1>
        <CounterManagement ownerName="Hazzim"></CounterManagement>
      </>
    );
  }
}
export default App;
