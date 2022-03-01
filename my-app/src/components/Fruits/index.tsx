import React from "react";
import { FruitsProps, FruitsState } from "./interface";

class Fruits extends React.Component<FruitsProps, FruitsState> {
  constructor(props: FruitsProps) {
    super(props);
    this.state = {
      fruits: ["apple", "coconut"],
      newFruit: "",
    };
  }
  handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
          newFruit: event.currentTarget.value
      })
  }
  handleAddButtonClick = () => {
      this.setState({
          fruits:[...this.state.fruits, this.state.newFruit]
      })
  }
  render() {
    const { fruits, newFruit } = this.state;
    const fruitsUI = fruits.map((fruit) => {
      return <li key={fruit}>{fruit}</li>;
    });
    return (
      <div>
        <h1>Fruits</h1>
        <ul>{fruitsUI}</ul>
        <input placeholder="Add a fruit" value={newFruit} onChange={this.handleInputOnChange} />
        <button onClick={this.handleAddButtonClick}>Add Fruit</button>
      </div>
    );
  }
}
export default Fruits;
