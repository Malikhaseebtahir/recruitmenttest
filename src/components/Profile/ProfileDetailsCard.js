import React from "react";

import classes from "./Profile.module.css";
import AppButton from "../UI/AppButton";

const ProfileDetailsCard = ({ profile, onClick }) => {
  return (
    <div>
      <div>
        <label className={classes.label}>FirstName: </label>
        <span className={classes["label-value"]}>{profile.FirstName}</span>
      </div>
      <div>
        <label className={classes.label}>LastName: </label>
        <span className={classes["label-value"]}>{profile.LastName}</span>
      </div>
      <div>
        <label className={classes.label}>Email: </label>
        <span className={classes["label-value"]}>{profile.Email}</span>
      </div>
      {profile.Phone && (
        <div>
          <label className={classes.label}>Phone: </label>
          <span className={classes["label-value"]}>{profile.Phone}</span>
        </div>
      )}
      {profile.Avatar && (
        <div>
          <label className={classes.label}>Avatar</label>
          <span className={classes["label-value"]}>{profile.Avatar}</span>
        </div>
      )}

      <AppButton classes={"btn btn-primary"} onClick={onClick} text="Edit" />
    </div>
  );
};

export default ProfileDetailsCard;
