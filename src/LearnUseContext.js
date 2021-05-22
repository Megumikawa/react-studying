import React, { useState } from 'react'
import FunctionContextComponent from './FuntionContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function LearnUseContext() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}
