import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#262626");

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center bottom-12 items-center fixed flex-wrap inset-x-2 px-2">
          <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg liquid-bg rounded-3xl px-3 py-2">
            <button
            onClick={() => setColor("#e11d48")}
              className="hover:invert-10 cursor-pointer outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "#e11d48" }}
            >
              Red
            </button>
            <button
             onClick={() => setColor("#15803d")}
              className="hover:invert-10 cursor-pointer outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "#15803d" }}
            >
              green
            </button>
            <button
             onClick={() => setColor("#2563eb")}
              className="hover:invert-10 cursor-pointer outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "#2563eb" }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
