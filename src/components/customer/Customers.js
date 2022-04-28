import React, { useState, useEffect, useCallback } from "react";

import { getCustomerAddresses } from "../../services/customerService";
import {
  getCustomerAddress,
  updateAddress,
  addAddress,
  getCountries,
  getCities,
  getProvinces,
} from "../../services/addressService";
import classes from "./Customer.module.css";
import EditAddressModal from "./EditAddressModal";
import NewAddressModal from "./NewAddressModal/NewAddressModal";

const Customers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [countries, setCountries] = useState([]);
  const [customerAddresses, setCustomerAddresses] = useState([]);
  const [editableAddress, setEditableAddress] = useState({});
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);
  const [showNewAddressModal, setShowNewAddressModal] = useState(false);

  const getAllCities = useCallback(async () => {
    try {
      const response = await getCities();
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      const {
        data: { Response: cities },
      } = await response;

      setCities(cities);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAllProvinces = useCallback(async () => {
    try {
      const response = await getProvinces();
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      const {
        data: { Response: provinces },
      } = response;
      setProvinces(provinces);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAllCountries = useCallback(async () => {
    try {
      const response = await getCountries();
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      const {
        data: { Response: countries },
      } = response;
      setCountries(countries);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllCities();
    getAllProvinces();
    getAllCountries();
  }, [getAllCities, getAllCountries, getAllProvinces]);

  const callCustomerHandler = async () => {
    setIsLoading(true);
    try {
      const response = await getCustomerAddresses();

      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const {
        data: { Response: allAddresses },
      } = await response;
      console.log(allAddresses);
      setCustomerAddresses(allAddresses);
      setIsLoading(false);
    } catch (error) {
      console.log(typeof error);
    }
    setIsLoading(false);
  };

  const toggleNewAddressModalHandler = () => {
    setShowNewAddressModal((prevState) => !prevState);
  };

  const addressClickHandler = async (addressId) => {
    try {
      const response = await getCustomerAddress(addressId);
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const {
        data: { Response: newAddress },
      } = await response;

      console.log(newAddress);
      setEditableAddress(newAddress);
      toggleModalHandler();
    } catch (error) {
      alert(`${error}. Error while retrieving the address.`);
    }
  };

  const toggleModalHandler = () => {
    setShowEditAddressModal((prevState) => !prevState);
  };

  const formSubmitHandler = (data) => {
    updateAddress(data);
  };

  const addNewAddressHandler = async (data) => {
    console.log(data);
    setShowNewAddressModal((prevState) => !prevState);

    const response = await addAddress(data);
    console.log("Response -> ", response);
  };

  return (
    <>
      <button className="btn btn-primary mt-5" onClick={callCustomerHandler}>
        Get All Customer Addresses.
      </button>
      <button
        className="btn btn-primary mt-5 ml-5"
        onClick={toggleNewAddressModalHandler}
      >
        Add new Address
      </button>
      {!isLoading &&
        customerAddresses.map((address) => (
          <div
            key={address.AddressId}
            onClick={() => addressClickHandler(address.AddressId)}
            className={classes.address}
          >
            {address.Address !== null ? (
              <p style={{ display: "inline-block", marginTop: "9px" }}>
                {address.Address}
              </p>
            ) : (
              <p style={{ color: "red", marginTop: "9px" }}>No address</p>
            )}
          </div>
        ))}

      {isLoading && (
        <p
          style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}
        >
          Loading...
        </p>
      )}

      {showEditAddressModal && (
        <EditAddressModal
          address={editableAddress}
          onSubmit={formSubmitHandler}
          onCloseModal={toggleModalHandler}
        />
      )}

      {showNewAddressModal && (
        <NewAddressModal
          countries={countries}
          cities={cities}
          provinces={provinces}
          onSubmit={addNewAddressHandler}
          onClose={toggleNewAddressModalHandler}
        />
      )}
    </>
  );
};

export default Customers;
