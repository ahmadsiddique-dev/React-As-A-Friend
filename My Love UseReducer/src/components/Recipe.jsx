import React, { useReducer } from 'react'
import handleCount from './handleCount';

const Recipe = () => {
    const [count, dispatch] = useReducer(handleCount, 10);
  return (
    <div>
        <div>The number is : {count}</div>
        <div style={{ display : 'flex', gap : 13, marginTop : 20}}>
            <button onClick={() => dispatch({ type : "INCREMENT"})}>Increase</button>
            <button onClick={() => dispatch({ type : "DECREMENT"})}>Decrease</button>
        </div>
    </div>
  )
}

export default Recipe