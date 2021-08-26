import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";



const Session = ({session, focusDuration, breakDuration}) => {
  const progressBar = (session, breakDuration, focusDuration) => {
    if (session?.label === 'Focusing') {
      return (1 - session?.timeRemaining/(focusDuration*60))*100
    } else if (session?.label === "On Break") {
      return (1 - session?.timeRemaining/(breakDuration*60))*100
    } else {
      return 0
    }
  };
  // Changing the fill of the progress bar based off of time elapsed
  return (
    <>
    <div className="row mb-2">
    <div className="col">
      {/* Updated message below to include current session (Focusing or On Break) total duration */}
      <h2 data-testid="session-title">
        {session?.label} for {session?.label === 'On Break' ? minutesToDuration(breakDuration) : minutesToDuration(focusDuration)} minutes
      </h2>
      {/* Updated message below correctly format the time remaining in the current session */}
      <p className="lead" data-testid="session-sub-title">
        {session ? secondsToDuration(session?.timeRemaining) : minutesToDuration(focusDuration)} remaining
      </p>
    </div>
  </div>
  <div className="row mb-2">
    <div className="col">
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow= {progressBar(session, breakDuration, focusDuration)}
          style={{ width: `${progressBar(session, breakDuration, focusDuration)}%` }}
        />
      </div>
    </div>
  </div>
  </>
  )
}

export default Session