import React, {ErrorInfo} from "react";
import "./App.css";
import MyPureComponent from "./components/MyPureComponent";

export const App: React.FC = () => {
  
    return (
      <React.Fragment>
        <h1>My React Application</h1>
        <MyPureComponent/>
      </React.Fragment>
    );
  
}
export default App;
