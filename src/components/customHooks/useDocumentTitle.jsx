import { useEffect, useState } from "react";

// Custom Hook for Counting:
export default function (initCount = 0, value = 1) {
  const [count, setCount] = useState(initCount);

  useEffect(() => {
    document.title = "Custom Hook Clicked" + " " + count;
  }, [count]);

  const increase = () => {
    setCount((p) => p + value);
  };

  const decrease = () => {
    setCount((p) => p - value);
  };

  const reset = () => {
    setCount(0);
  };

  // we can export functions or methods easily as variables:
  return [count, increase, decrease, reset];
}
