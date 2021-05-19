import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrement() {
    setCount(prevCount => prevCount -1)
  }

  function increment() {
    setCount(prevCount => prevCount +1)
    setTheme('red')
  }

  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={increment}>+</button>
    </>
  )
}

export default App;
