import React from "react";

import classes from "./Customer.module.css";

const CustomerAddressContainer = ({ address, onClick }) => {
  return (
    <div onClick={() => onClick(address.AddressId)} className={classes.address}>
      {address.Address !== null && address.Address !== "" ? (
        <p className={classes.addressContainer}>{address.Address}</p>
      ) : (
        <p className={classes.noAddressContainer}>No address</p>
      )}
    </div>
  );
};

export default CustomerAddressContainer;
