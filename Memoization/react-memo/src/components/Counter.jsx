import React from "react";

const Counter = ({count, setCount, ...props}) => {

  const increaseCounter = () => {
    setCount(prevCount => prevCount + 1);
  }
  console.log("Counter component is rendering");
  return(
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 20, paddingTop:5, backgroundColor:" #B2FEFA" }}>
        <button onClick={increaseCounter}>Click me to increase counter</button>
        <p>Counter: {count}</p>
    </div>
  )
}

export default React.memo(Counter);