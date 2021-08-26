import React from "react";
import { minutesToDuration } from "../utils/duration";

// Adding the ability to change the focus duration in increments of 5 with a maximum of 60min and a minimum of 5min
const Focus = ({focusDuration, setFocusDuration, disable}) => {
  const handleFocusDuration = (event) => {
    if (focusDuration >= 10 && event.target.dataset.testid === "decrease-focus") {
      setFocusDuration((currentCount) => currentCount-5);
    } else if (focusDuration <= 55 && event.target.dataset.testid === "increase-focus") {
      setFocusDuration((currentCount) => currentCount + 5);
    };
  };

  return (
    <div className="input-group input-group-lg mb-2">
    <span className="input-group-text" data-testid="duration-focus">
      Focus Duration: {minutesToDuration(focusDuration)}
    </span>
    <div className="input-group-append">
      <button
        onClick = {handleFocusDuration}
        type="button"
        className="btn btn-secondary"
        data-testid="decrease-focus"
        disabled={disable}
      >
        <span className="oi oi-minus" />
      </button>
      <button
        onClick = {handleFocusDuration}
        type="button"
        className="btn btn-secondary"
        data-testid="increase-focus"
        disabled={disable}
      >
        <span className="oi oi-plus" />
      </button>
    </div>
  </div>
  );
};

export default Focus