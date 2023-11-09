import { useState, useEffect } from 'react';
import "./App.css"


function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => (seconds + 1) % 86400);
    }, 50);

    return () => clearInterval(interval);
  });

  const formatTime = time => time.toString().padStart(2, '0');

  const hours = formatTime(Math.floor(seconds / 3600));
  const minutes = formatTime(Math.floor((seconds % 3600) / 60));
  const remainingSeconds = formatTime(seconds % 60);

  return (
    <div className="timer">
      {hours}:{minutes}:{remainingSeconds}
    </div>
  );
}

export default Timer;


