import React from "react";
import { withTrackClick } from "../../hoc/withTrackClick";
import { ProfileOwnProps, ProfileProps } from "./interface";
const Profile: React.FC<ProfileProps> = ({ click, ownerName }) => {
  return (
    <>
      <h1>{ownerName}'s Profile</h1>
      <h2>Clicks: {click}</h2>
    </>
  );
};
export default withTrackClick<ProfileOwnProps>(Profile);
