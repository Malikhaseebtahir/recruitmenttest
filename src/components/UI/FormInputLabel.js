import React from "react";

const FormInputLabel = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" value={value} onChange={onChange} />
    </div>
  );
};

export default FormInputLabel;
