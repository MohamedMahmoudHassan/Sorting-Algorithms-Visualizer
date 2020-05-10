import React from "react";

const Input = ({ label, name, error, isSorting, ...rest }) => {
  return (
    <div className="col-sm-6 col-lg-2">
      <div className="mb-2">
        <small className="text-uppercase font-weight-bold">{label}</small>
      </div>
      <div className="form-group">
        <input
          className="form-control-alternative form-control"
          {...rest}
          name={name}
          id={name}
          key={name}
          disabled={isSorting}
        />
      </div>
    </div>
  );
};

export default Input;
