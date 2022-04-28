import React, { useReducer } from "react";

import Modal from "../../UI/Modal";
import * as actionType from "./actionTypes";
import { reducer, initialState } from "./reducer";

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
    console.log(cityName);
    const city = cities.find((c) => c.Name === cityName);

    dispatch({
      type: actionType.CITY_CHANGED,
      payload: { value: city.Id },
    });
  };

  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" onChange={titleChangeHandler} />
        </div>
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
        <div className="form-group">
          <label>Country</label>
          <input className="form-control" onChange={countyChangedHandler} />
        </div>
        <div className="form-group">
          <label>AddressLine1</label>
          <input
            className="form-control"
            onChange={addressLineOneChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>AddressLine2</label>
          <input
            className="form-control"
            onChange={addressLineTwoChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input className="form-control" onChange={postalCodeChangeHandler} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="form-control" onChange={descriptionChangeHandler} />
        </div>
        <div className="form-group">
          <label>Contact Title</label>
          <input
            className="form-control"
            onChange={contactTitleChangeHandler}
          />
        </div>
        <div>
          <button className="btn btn-primary">Save</button>
          <button onClick={onClose} className="btn btn-default ml-4">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewAddressModal;
