import React from "react";

const AppButton = ({ classes, onClick, type = "button", text }) => {
  return (
    <button className={classes} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default AppButton;
