import React from "react";
import MyReactMemo from "../MyReactMemo";
import { MyPureComponentProps, MyPureComponentState } from "./interface";


class MyPureComponent extends React.PureComponent<
  MyPureComponentProps,
  MyPureComponentState
> {
  constructor(props: MyPureComponentProps) {
    super(props);

    this.state = {
      name: "Hazzim",
      address: {
        city: "Parral",
        state: "Chihuahua",
      },
    };
  }
  handleSetState = () => {
    const newAddress = {
      city: "Barral",
      state: "MyState",
    };
    this.setState({
     // name: "Said",
      address: newAddress,
    });
  };
  render() {
    console.log("Render");
    const { name, address } = this.state;
    return (
      <>
        <h1>Pure Component</h1>
        <MyReactMemo name={name} address={address}/>
        <button onClick={this.handleSetState}>Set State</button>
      </>
    );
  }
}
export default MyPureComponent;
