import React from "react";
import { minutesToDuration } from "../utils/duration";

// Added the ability to change the break duration in 1 minute increments with a maximum of 15min and a minimum of 1min
const Break = ({breakDuration, setBreakDuration, disable}) => {
  const handleBreakDecrease = () => {
    if (breakDuration >= 2) {
      setBreakDuration((currentCount) => currentCount-1);
    };
  };
   const handleBreakIncrease = () => {
     if (breakDuration <= 14) {
      setBreakDuration((currentCount) => currentCount+1)
    };
  };
  
  return (
    <div className="float-right">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        {/*Displays the current break session duration */}
        Break Duration: {minutesToDuration(breakDuration)}
      </span>
      <div className="input-group-append">
        {/*Implemented decreasing break duration and disable during a focus or break session*/}
        <button
          onClick = {handleBreakDecrease}
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          disabled = {disable}
        >
          <span className="oi oi-minus" />
        </button>
        {/*Implemented increasing break duration and disable during a focus or break session*/}
        <button
          onClick={handleBreakIncrease}
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          disabled={disable}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  </div>
  )
};

export default Break;
