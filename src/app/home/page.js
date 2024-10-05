"use client"

import React, { useEffect, useState } from 'react'

const page = () => {
  const[posts, setPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {

        const data = await fetch('/api/posts')
        const response = await data.json()
        setPosts(response.posts)
        console.log(response)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>This is Home!</h1>
      <div>
        {posts.map(post => (
        <div>{post.post}</div>
        ))}
    </div>
    </div>
  )
}

export default page;