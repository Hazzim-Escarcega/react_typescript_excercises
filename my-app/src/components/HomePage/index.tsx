import React from "react";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";



class HomePage extends React.Component{
  nullClass(){
    return null
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ButtonGroup>
        <Button onClick={this.nullClass} type="primary">Primary</Button>
        <Button onClick={this.nullClass}>Default</Button>
        Test
        </ButtonGroup>
      </div>
    )
  }
}
export default HomePage;
