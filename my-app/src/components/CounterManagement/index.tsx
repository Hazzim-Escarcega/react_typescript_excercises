import React from "react";
import axios from "axios";
import {
  CounterManagementProps,
  CounterManagementState,
  UserDataAPI,
} from "./interface";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  //State initialization
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      user: 1,
      userData: {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    };
  }
  handlePlusClick = () => {
    this.setState({ user: this.state.user + 1 });
  };
  handleMinusClick = () => {
    this.setState({ user: this.state.user - 1 });
  };
  fetchuserData = () => {
    axios
      .get(`https://reqres.in/api/users/${this.state.user}`)
      .then((response) => {
        const userDataAPI = response.data as UserDataAPI;
        this.setState({ userData: userDataAPI.data });
      });
  };
  componentDidMount() {
    this.fetchuserData();
  }
  componentDidUpdate(
    prevProps: CounterManagementProps,
    prevState: CounterManagementState,
    snapshot: any
  ) {
    console.log("componentDidUpdate");
    console.log("snapshot", snapshot);
    if(prevState.user!== this.state.user) {
      this.fetchuserData();
    }
  }

  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { user, userData } = this.state;
    const { first_name } = userData;
    return (
      <div>
        <h1>Counter Management</h1>
        <h2>Owner name: {ownerName}</h2>
        <h3>User ID: {user}</h3>
        <h3>{first_name}</h3>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    );
  }
}
export default CounterManagement;
