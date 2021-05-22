import React, { useState } from 'react';
import Post from './Post';
import Memo from './Memo';
import LeareUseRed from './LeareUseRef';

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
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </div>
    <div style={{borderBottom:'1px solid', margin:'20px 0'}}></div>
    <Post />
    <div style={{borderBottom:'1px solid', margin:'20px 0'}}></div>
    <Memo />
    <div style={{borderBottom:'1px solid', margin:'20px 0'}}></div>
    <LeareUseRed />
    </>
  )
}

export default App;
