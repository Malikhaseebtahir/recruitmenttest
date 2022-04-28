import React, { useState } from "react";
import Modal from "../UI/Modal";

const EditAddressModal = ({ address, onSubmit, onClose, onDelete }) => {
  const [addressValue, setAddressValue] = useState(address);

  const addressLineOneChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      AddressLine1: event.target.value,
    }));
  };

  const addressLineTwoChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      AddressLine2: event.target.value,
    }));
  };

  const postalCodeChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      PostalCode: event.target.value,
    }));
  };

  const titleChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      Title: event.target.value,
    }));
  };

  const countyChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      County: event.target.value,
    }));
  };

  const descriptionChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      Description: event.target.value,
    }));
  };

  const contactTitleChangeHandler = (event) => {
    setAddressValue((prevState) => ({
      ...prevState,
      ContactTitle: event.target.value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const updatedForm = {
      Id: addressValue.Id,
      AddressLine1: addressValue.AddressLine1,
      AddressLine2: addressValue.AddressLine2,
      PostalCode: addressValue.PostalCode,
      Title: addressValue.Title,
      County: addressValue.County,
      Description: addressValue.Description,
      ContactTitle: addressValue.ContactTitle,
    };

    onSubmit(updatedForm);
    onClose();
  };

  const deleteHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this address")) {
      onDelete(addressValue.Id);
    }
  };

  return (
    <Modal>
      <p>{address.Address}</p>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className="form-group">
            <label>AddressLine 1</label>
            <input
              className="form-control"
              value={addressValue.AddressLine1}
              onChange={addressLineOneChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>AddressLine 2</label>
            <input
              className="form-control"
              value={addressValue.AddressLine2}
              onChange={addressLineTwoChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              className="form-control"
              value={addressValue.PostalCode}
              onChange={postalCodeChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              value={addressValue.Title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>County</label>
            <input
              className="form-control"
              value={addressValue.County}
              onChange={countyChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              value={addressValue.Description}
              onChange={descriptionChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Contact Title</label>
            <input
              className="form-control"
              value={addressValue.ContactTitle}
              onChange={contactTitleChangeHandler}
            />
          </div>
          <div>
            <button className="btn btn-primary">Update</button>
            <button onClick={onClose} className="btn btn-default ml-3">
              Cancel
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="btn btn-danger ml-3"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditAddressModal;
