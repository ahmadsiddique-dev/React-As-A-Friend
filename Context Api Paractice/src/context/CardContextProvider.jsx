import React, { Children, useEffect, useState } from 'react'
import CardContext from './cardsContext'

const CardContextProvider = ({children}) => {
    const [data, setData] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((newData) => {
      const first20 = newData.slice(0, 20);
      setData(first20);

      console.log(first20);
      if (!first20.length) {
        console.log("Bro! we didn't receive data.");
      }
    });
}, []);
    
    return (
        <CardContext.Provider value={{data}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;