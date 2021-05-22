import React, { useState } from 'react';
import Post from './Post';
import Memo from './Memo';

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
    <div style={{marginBottom:'30px'}}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </div>
    <Post />
    <Memo />
    </>
  )
}

export default App;
