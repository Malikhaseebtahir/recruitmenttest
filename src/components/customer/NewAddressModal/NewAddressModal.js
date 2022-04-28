import React, { useReducer } from "react";

import Modal from "../../UI/Modal";
import AppButton from "../../UI/AppButton";
import * as actionType from "./actionTypes";
import { reducer, initialState } from "./reducer";
import FormInputLabel from "../../UI/FormInputLabel";

const NewAddressModal = ({
  countries,
  provinces,
  cities,
  onSubmit,
  onClose,
}) => {
  const [addressForm, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (event) => {
    event.preventDefault();

    onSubmit(addressForm);
  };

  const titleChangeHandler = (event) => {
    dispatch({
      type: actionType.TITLE_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const countyChangedHandler = (event) => {
    dispatch({
      type: actionType.COUNTY_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const addressLineOneChangeHandler = (event) => {
    dispatch({
      type: actionType.ADDRESS_LINE1_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const addressLineTwoChangeHandler = (event) => {
    dispatch({
      type: actionType.ADDRESS_LINE2_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const postalCodeChangeHandler = (event) => {
    dispatch({
      type: actionType.POSTAL_CODE_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const descriptionChangeHandler = (event) => {
    dispatch({
      type: actionType.DESCRIPTION_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const contactTitleChangeHandler = (event) => {
    dispatch({
      type: actionType.CONTACT_TITLE_CHANGED,
      payload: { value: event.target.value },
    });
  };

  const countryChangedHandler = (event) => {
    const countryName = event.target.value;
    const country = countries.find((c) => c.Name === countryName);

    dispatch({
      type: actionType.COUNTRY_CHANGED,
      payload: { value: country.Id },
    });
  };

  const provinceChangedHandler = (event) => {
    const provinceName = event.target.value;
    const province = provinces.find((c) => c.Name === provinceName);

    dispatch({
      type: actionType.PROVINCE_CHANGED,
      payload: { value: province.Id },
    });
  };

  const cityChangedHandler = (event) => {
    const cityName = event.target.value;
    const city = cities.find((c) => c.Name === cityName);

    dispatch({
      type: actionType.CITY_CHANGED,
      payload: { value: city.Id },
    });
  };

  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <FormInputLabel label="Title" onChange={titleChangeHandler} />

        <div className="form-group">
          <label>Country</label>
          <select className="form-control" onChange={countryChangedHandler}>
            <option></option>
            {countries.map((country) => (
              <option key={country.Id}>{country.Name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Province</label>
          <select className="form-control" onChange={provinceChangedHandler}>
            <option></option>
            {provinces.map((province) => (
              <option key={province.Id}>{province.Name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>City</label>
          <select className="form-control" onChange={cityChangedHandler}>
            <option></option>
            {cities.map((city) => (
              <option key={city.Id}>{city.Name}</option>
            ))}
          </select>
        </div>

        <FormInputLabel label="County" onChange={countyChangedHandler} />

        <FormInputLabel
          label="AddressLine1"
          onChange={addressLineOneChangeHandler}
        />

        <FormInputLabel
          label="AddressLine2"
          onChange={addressLineTwoChangeHandler}
        />

        <FormInputLabel
          label="Postal Code"
          onChange={postalCodeChangeHandler}
        />

        <FormInputLabel
          label="Description"
          onChange={descriptionChangeHandler}
        />

        <FormInputLabel
          label="Contact Title"
          onChange={contactTitleChangeHandler}
        />

        <div>
          <AppButton classes={"btn btn-primary"} type="Submit" text="Save" />

          <AppButton
            classes={"btn btn-default ml-4"}
            onClick={onClose}
            text="Cancel"
          />
        </div>
      </form>
    </Modal>
  );
};

export default NewAddressModal;
