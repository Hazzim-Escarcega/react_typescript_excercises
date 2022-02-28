import React, { ErrorInfo } from "react";
import "./App.css";
import NewsFeed  from "./components/NewsFeed";
import Profile from "./components/Profile";
import TrackClick from "./components/TrackClick";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>My React Application</h1>
      <Profile ownerName="Hazzim"/>
      <NewsFeed/>
    </React.Fragment>
  );
};
export default App;
