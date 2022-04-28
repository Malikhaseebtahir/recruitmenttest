import React, { useState } from "react";

import Modal from "../UI/Modal";
import AppButton from "../UI/AppButton";

const EditProfile = ({ profile, onFormSubmit, onCloseModal }) => {
  const [profileValues, setProfileValues] = useState(profile);

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedProfile = {
      Id: profileValues.Id,
      FirstName: profileValues.FirstName,
      LastName: profileValues.LastName,
      Avatar: profileValues.Avatar,
      Culture: profileValues.Culture,
    };

    onFormSubmit(updatedProfile);
  };

  const firstNameChangeHandler = (event) => {
    setProfileValues((prevState) => ({
      ...prevState,
      FirstName: event.target.value,
    }));
  };

  const lastNameChangeHandler = (event) => {
    setProfileValues((prevState) => ({
      ...prevState,
      LastName: event.target.value,
    }));
  };

  const avatarNameChangeHandler = (event) => {
    setProfileValues((prevState) => ({
      ...prevState,
      Avatar: event.target.value,
    }));
  };

  const cultureNameChangeHandler = (event) => {
    setProfileValues((prevState) => ({
      ...prevState,
      Culture: event.target.value,
    }));
  };

  return (
    <Modal>
      <h4>Edit Profile</h4>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>FirstName</label>
          <input
            className="form-control"
            value={profileValues.FirstName}
            onChange={firstNameChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>LastName</label>
          <input
            className="form-control"
            value={profileValues.LastName}
            onChange={lastNameChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>Avatar</label>
          <input
            className="form-control"
            value={profileValues.Avatar || ""}
            onChange={avatarNameChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>Culture</label>
          <input
            className="form-control"
            value={profileValues.Culture || ""}
            onChange={cultureNameChangeHandler}
          />
        </div>

        <div>
          <AppButton classes={"btn btn-primary"} type="Submit" text="Submit" />
          <AppButton
            classes={"btn btn-default ml-2"}
            onClick={onCloseModal}
            text="Cancel"
          />
        </div>
      </form>
    </Modal>
  );
};

export default EditProfile;
