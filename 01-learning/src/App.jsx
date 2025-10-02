import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  const handleCount = () => {
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };

  const handleNCount = () => {
    {
      count > 0 ? setCount(count - 1) : setCount(count);
    }
  };
  return (
    <>
      <h2>The value of count {count}</h2>

      <div style={{ display: "flex", gap: 23 }}>
        <button onClick={handleCount}>Increase</button>
        <button onClick={handleNCount}>Decrease</button>
      </div>
    </>
  );
}

export default App;
