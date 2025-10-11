import React, { useContext, useEffect, useMemo } from "react";
import CardContext from "../context/cardsContext";

function Card(props) {

  return (
<div className="bg-white shadow-md rounded-xl p-4 w-full flex flex-col gap-2 text-gray-700">
  <h3 className="text-lg font-semibold">
    {props.heading}
  </h3>
  <p className="text-sm leading-relaxed text-gray-600">
    {props.para}
  </p>
</div>

  );
}

export default Card;
