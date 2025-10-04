import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>/?`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const handleCopy = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current?.value);
  };
  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, length]);

  return (
    <>
      <center className="mt-20">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="w-full max-w-md p-4 mx-auto bg-gray-800 shadow-lg  rounded-lg my-8 text-orange-500">
          <center>
            <div>
              Generate Your Strong <strong>Password</strong>
            </div>
          </center>
          <center>
            <div className="flex mt-2 shadow w-full max-w-md mx-auto rounded-lg overflow-hidden mb-4">
              <input
                type="text"
                value={Password}
                className="outline-none text-white bg-neutral-900 w-full py-1 px-3"
                placeholder="password"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={handleCopy}
                className="bg-orange-400 duration-100 text-[#252222] text-[0.85em] px-[10px] font-semibold hover:opacity-90 active:bg-amber-700 active:text-white cursor-pointer"
              >
                Copy
              </button>
            </div>
          </center>
          <div className="gap-x-2 flex justify-around items-center text-sm">
            <div className="flex  items-center gap-1">
              <input
                type="range"
                className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                min={6}
                max={25}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>
                <span className="text-white">length : </span>
                {length}
              </label>
            </div>
            <div className="text-white flex items-center font-semibold">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="appearance-none w-3 h-3 border-gray-700 rounded-md checked:bg-fuchsia-600
              bg-white cursor-pointer"
                onChange={(e) => setNumberAllowed(e.target.checked)}
              />
              <label className="ml-1" htmlFor="numberInput">
                Numbers
              </label>
            </div>
            <div className="text-white flex items-center font-semibold">
              <input
                type="checkbox"
                className="appearance-none w-3 h-3 border-gray-700 rounded-md checked:bg-fuchsia-600
              bg-white cursor-pointer"
                defaultChecked={charAllowed}
                id="inputCharacter"
                onChange={(e) => setCharAllowed(e.target.checked)}
              />
              <label className="ml-1" htmlFor="inputCharacter">
                Character
              </label>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
