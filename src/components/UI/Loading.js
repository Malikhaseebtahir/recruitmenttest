import React from "react";

import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.content}>
          <p className={classes.loadingText}>Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
