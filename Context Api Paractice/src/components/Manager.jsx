import React, { useContext } from "react";
import Card from "./Card";
import CardContext from "../context/cardsContext";

function Manager() {
  const {data} = useContext(CardContext);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Manager Dashboard
      </h1>

      {/* Grid container for cards */}
      <div
        className="
          grid 
          gap-6
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5
        "
      >
        {/* You can render multiple cards */}
        {data.map((post, i) => (
          <Card heading={post.title} para={post.body} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Manager;
