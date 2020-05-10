import React from "react";

const Select = ({ name, label, options, currentOption, onChange, isSorting }) => {
  return (
    <div className="mt-4 mt-md-0 col-md-auto">
      <div className="mb-3">
        <small className="text-uppercase font-weight-bold">{label}</small>
      </div>
      {options.map(item => (
        <div className="custom-control custom-control-inline custom-radio mb-3" key={item.name}>
          <input
            className="custom-control-input"
            id={item.name}
            value={item.name}
            name={name}
            type="radio"
            checked={item.name === currentOption}
            onChange={onChange}
            disabled={isSorting || item.disabled}
          />
          <label className="custom-control-label" htmlFor={item.name}>
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Select;
