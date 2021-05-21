import React, { useState } from 'react'

export default function Post() {
  const [resourceType, setresourceType] = useState('posts')

  return (
    <>
      <div>
        <button onClick={() => setresourceType('posts')}>Posts</button>
        <button onClick={() => setresourceType('users')}>Users</button>
        <button onClick={() => setresourceType('comments')}>Comments</button>
      </div>
      <hi>{resourceType}</hi>
    </>
  )
}
