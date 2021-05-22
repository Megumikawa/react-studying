import React, { useState } from 'react'

export default function LeareUseRef() {
  const [name, setName] =useState('')
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
    </>
  )
}
