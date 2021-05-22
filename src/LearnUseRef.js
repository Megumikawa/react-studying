import React, { useState, useEffect, useRef } from 'react'

export default function LearnUseRef() {
  const [name, setName] =useState('')
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to {prevName.current}</div>
    </>
  )
}
