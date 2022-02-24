import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";
import axios from "axios";
import { convertCompilerOptionsFromJson } from "typescript";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  //State initialization
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      counter: 0,
      users: [],
    };
    console.log("CONSTRUCTOR");
  }
  handlePlusClick = () => {
    this.setState(
      function (prevState) {
        return {
          counter: prevState.counter + 1,
        };
      },
      function () {
        console.log("Call Back Function");
      }
    );
  };
  handleMinusClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(
    props: CounterManagementProps,
    state: CounterManagementState
  ) {
    console.log("GetDerivedStateFromPro");
    return null;
    //return props.ownerName === "Hazzim" ? { counter: 5 } : null; FUNCTION USAGE
  }
  clickWindow = () => {
    console.log("ClickWindow event occur");
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      const data = response.data;
      const users = data.data.map((userData: any) => userData.first_name);
      this.setState({ users });
    });
    window.addEventListener("click", this.clickWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.clickWindow);

  }
  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { counter, users } = this.state;
    return (
      <div>
        <h1>Counter Management</h1>
        <h2>Owner name: {ownerName}</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
        <ul>
          {users.map((user: any) => (
            <li>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CounterManagement;
