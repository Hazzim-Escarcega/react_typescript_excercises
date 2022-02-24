import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterManagement from "./components/CounterManagement";
interface AppState {
  change: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      change: true,
    };
  }
  clickButton = () => {
    this.setState({ change: !this.state.change });
  };
  render() {
    return (
      <>
        <h1>My React Application</h1>
        {this.state.change && (
          <CounterManagement ownerName="Hazzim"></CounterManagement>
        )}
        <button onClick={this.clickButton}>Change</button>
      </>
    );
  }
}
export default App;
