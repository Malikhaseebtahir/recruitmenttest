import * as actionType from "./actionTypes";

export const initialState = {
  Title: "",
  County: "",
  AddressLine1: "",
  AddressLine2: "",
  PostalCode: "",
  Description: "",
  ContactTitle: "",
  CountryId: "",
  ProvinceId: "",
  CityId: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.TITLE_CHANGED:
      return { ...state, Title: action.payload.value };
    case actionType.COUNTY_CHANGED:
      return { ...state, County: action.payload.value };
    case actionType.ADDRESS_LINE1_CHANGED:
      return { ...state, AddressLine1: action.payload.value };
    case actionType.ADDRESS_LINE2_CHANGED:
      return { ...state, AddressLine2: action.payload.value };
    case actionType.POSTAL_CODE_CHANGED:
      return { ...state, PostalCode: action.payload.value };
    case actionType.DESCRIPTION_CHANGED:
      return { ...state, Description: action.payload.value };
    case actionType.CONTACT_TITLE_CHANGED:
      return { ...state, ContactTitle: action.payload.value };
    case actionType.COUNTRY_CHANGED:
      return { ...state, CountryId: action.payload.value };
    case actionType.PROVINCE_CHANGED:
      return { ...state, ProvinceId: action.payload.value };
    case actionType.CITY_CHANGED:
      return { ...state, CityId: action.payload.value };
    default:
      return initialState;
  }
};
