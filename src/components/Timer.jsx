import { useEffect, useState } from "react";
import all from "../cssModules/button.module.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    const intervalId = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    );
    console.log("useEffect");

    return () => {
      clearInterval(intervalId);
      console.log("CLean Up");
    };
  }, [start]);

  const toggleStart = () => setStart((prevStart) => !prevStart);

  return (
    <>
      <div>Time: {time}</div>
      <button className={all.error} onClick={toggleStart}>
        {start ? "Stop" : "Start"}
      </button>
    </>
  );
}
