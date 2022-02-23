import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  //State initialization
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  handlePlusClick = () => {
    this.setState(
      function (prevState) {
        return {
          counter: prevState.counter + 1,
        };
      },
      function () {
        console.log("CBFUNCT");
      }
    );
  };
  handleMinusClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <h1>Counter Management</h1>
        <h2>Owner name: {ownerName}</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    );
  }
}
export default CounterManagement;
