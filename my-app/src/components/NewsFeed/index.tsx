import React from "react";
import { withTrackClick } from "../../hoc/withTrackClick";
import { NewsFeedProps } from "./interface";
const NewsFeed: React.FC<NewsFeedProps> = ({ click }) => {
  return (
    <>
      <h1>My NewsFeed</h1>
      <h2>Clicks: {click}</h2>
    </>
  );
};
export default withTrackClick(NewsFeed);
