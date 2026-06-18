import React,{useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount(prev => prev + 1);
      };
    
      const decrement = () => {
        setCount(prev => prev - 1);
      };
    
      const reset = () => {
        setCount(0);
      };
  return (
    <>
    <div>Count</div>
    <h1>{count}</h1>

      <button onClick={increment}>Increment</button>

      

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Count