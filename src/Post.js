import React, { useState, useEffect } from 'react'

export default function Post() {
  const [resourceType, setresourceType] = useState('posts')
  
  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from resource change')
    }
  }, [resourceType])


  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setresourceType('posts')}>Posts</button>
        <button onClick={() => setresourceType('users')}>Users</button>
        <button onClick={() => setresourceType('comments')}>Comments</button>
      </div>
      <hi >{resourceType}</hi>
      {/* {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
    </>
  )
}
