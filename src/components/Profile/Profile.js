import React, { useState, useEffect } from "react";

import {
  getIdentityUser,
  updateUserIdentity,
} from "../../services/identityService";
import classes from "./Profile.module.css";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await getIdentityUser();
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const {
        data: { Response: userProfile },
      } = response;

      setProfile(userProfile);
    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  };

  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const profileUpdateSubmitHandler = async (data) => {
    toggleModalHandler();
    setIsLoading(true);
    try {
      const response = await updateUserIdentity(data);
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const {
        data: { Response: updatedProfile },
      } = await response;

      setProfile(updatedProfile);
      setIsLoading(false);
    } catch (error) {
      alert(`${error} and we are reverting the changing`);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className={classes.profileContainer}>
        <h4 className={classes.heading}>User details</h4>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <div>
            <div>
              <label className={classes.label}>FirstName: </label>
              <span className={classes["label-value"]}>
                {profile.FirstName}
              </span>
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
            <button
              type="button"
              className={`btn btn-primary ${classes.editButton}`}
              onClick={toggleModalHandler}
            >
              Edit
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <EditProfile
          profile={profile}
          onFormSubmit={profileUpdateSubmitHandler}
          onCloseModal={toggleModalHandler}
        />
      )}
    </>
  );
};

export default Profile;
