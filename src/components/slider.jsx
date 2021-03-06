import React from "react";
import Nouislider from "nouislider-react";

const Slider = ({ handleUpdate, color, ...rest }) => {
  return (
    <Nouislider
      className={`input-slider--${color} .noUi-connect`}
      style={{ width: 150, marginTop: 30 }}
      range={{ min: 0, max: 100 }}
      start={[50]}
      connect={[true, false]}
      step={1}
      onUpdate={values => handleUpdate(values[0])}
      {...rest}
    />
  );
};

export default Slider;
