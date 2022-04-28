import React, { useState } from "react";

import Modal from "../UI/Modal";
import AppButton from "../UI/AppButton";
import FormInputLabel from "../UI/FormInputLabel";

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
        <FormInputLabel
          label="FirstName"
          value={profileValues.FirstName}
          onChange={firstNameChangeHandler}
        />

        <FormInputLabel
          label="LastName"
          value={profileValues.LastName}
          onChange={lastNameChangeHandler}
        />

        <FormInputLabel
          label="Avatar"
          value={profileValues.Avatar}
          onChange={avatarNameChangeHandler}
        />

        <FormInputLabel
          label="Culture"
          value={profileValues.Culture}
          onChange={cultureNameChangeHandler}
        />

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
