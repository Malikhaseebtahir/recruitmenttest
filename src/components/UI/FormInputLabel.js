import React from "react";

const FormInputLabel = ({ label, value = "", onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {value !== "" ? (
        <input className="form-control" value={value} onChange={onChange} />
      ) : (
        <input className="form-control" onChange={onChange} />
      )}
    </div>
  );
};

export default FormInputLabel;
