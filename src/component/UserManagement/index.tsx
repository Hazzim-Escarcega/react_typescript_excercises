import React from "react";
import axios from "axios";
import { Button } from "../Button";
import {
  UserDataAPI,
  UserManagementProps,
  UserManagementState,
} from "./interface";
import "./style.css";
import { hasUserAlreadyFeched } from "./utils";

export class UserManagement extends React.Component<
  UserManagementProps,
  UserManagementState
> {
  constructor(props: UserManagementProps) {
    super(props);
    this.state = {
      users: [],
      currentUserId: 1,
    };
  }
  fetchUser = async () => {
    const { currentUserId, users } = this.state;
    const response = await axios.get(
      `https://reqres.in/api/users/${currentUserId}`
    );
    const { data } = response.data as UserDataAPI;

    this.setState({
      users: [...users, data],
    });
  };
  componentDidMount() {
    this.fetchUser();
  }
  componentDidUpdate(
    prevProps: UserManagementProps,
    prevState: UserManagementState
  ) {
    const { currentUserId, users } = this.state;
    if (
      prevState.currentUserId !== this.state.currentUserId &&
      !hasUserAlreadyFeched(users, currentUserId)
    ) {
      this.fetchUser();
    }
  }
  handleAddUserid = () => {
    const { currentUserId } = this.state;
    currentUserId <= 10 &&
      this.setState({
        currentUserId: currentUserId + 1,
      });
  };
  handleRemoveUserid = () => {
    const { currentUserId } = this.state;
    currentUserId > 1 &&
      this.setState({
        currentUserId: currentUserId - 1,
      });
  };
  renderUsers = () => {
    const { users, currentUserId } = this.state;
    return users
      .filter((user) => user.id <= currentUserId)
      .map(({ avatar, first_name, last_name }) => {
        return (
          <div className="user-details">
            <img className="user-avatar" src={avatar}></img>
            <span>
              {first_name} {last_name}
            </span>
          </div>
        );
      });
  };
  render() {
    const {currentUserId} = this.state;
    return (
      <div className="users-management">
        <h1>User management</h1>
        <div className="users-container">
          {this.renderUsers()}
        </div>
        <p>Number of users: {currentUserId}</p>
        <div className="options">
          <Button onClick={this.handleRemoveUserid}>Remove</Button>
          <Button onClick={this.handleAddUserid}>Add</Button>
        </div>
      </div>
    )
  }
}
