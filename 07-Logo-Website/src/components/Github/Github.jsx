import React, { useEffect, useState } from "react";

const Github = () => {
  const [gData, setGData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ahmadsiddique-dev")
      .then((res) => res.json())
      .then((data) => {
        setGData(data);
        console.log("Data : ", data);
      });
  }, []);

  return (
    <div>
      <center className="flex justify-center items-center gap-7 flex-col p-4">
        <img
          className="rounded-full h-32"
          src={gData.avatar_url}
          alt="Ahmad Profile picure"
        />
        <h3>{gData.name}</h3>
      </center>
    </div>
  );
};

export default Github;
