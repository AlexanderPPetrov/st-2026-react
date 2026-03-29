import { useState } from 'react'


function FirstExample() {
  // Example for local state, conditional rendering and conditional class
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <div>{count}</div>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
       { count > 3 ? <div>
          Amount is too high!
      </div> : null }
      <div className={ count > 3 ? "yellow-box" : "blue-box"}></div>
    </>
  )
}

export default FirstExample
