import { useEffect, useState } from "react";
import { testValue, increaseValue } from "./TestStore";

export default function Hello() {
  const [value, setValue] = useState(testValue.get());

  useEffect(() => {
    const unsubscribe = testValue.subscribe(setValue);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>Test Value: {value}</p>
      <button onClick={increaseValue}>Change Value</button>
    </div>
  );
}
