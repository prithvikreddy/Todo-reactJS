import React, { useState, useEffect } from "react";

export default function Deadline(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <h3>🏃‍♂️🏃‍♂️🏃‍♂️🏃‍ ⏰{date.toLocaleTimeString()} is ticking!</h3>;
}
