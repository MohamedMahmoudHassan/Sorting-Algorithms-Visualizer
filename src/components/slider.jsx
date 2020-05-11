import React from "react";
import Nouislider from "nouislider-react";

const Slider = () => {
  return (
      <Nouislider
        className="input-slider--red .noUi-connect"
        style={{ width: 150, marginTop:30 }}
        range={{ min: 0, max: 100 }}
        start={[50]}
        connect={[true, false]}
        step={1}
      />
  );
};

export default Slider;
