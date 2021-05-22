import React, { useState } from 'react'
import FunctionContextComponent from './FuntionContextComponent'
import ClassContextComponent from './ClassContextComponent'

export const ThemeContext = React.createContext()

export default function LearnUseContext() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  )
}
