import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <div>You have spent {count} seconds on this web page.</div>;
};
