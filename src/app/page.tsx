import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import PostCard from '@/components/postCard/PostCard'
import PostList from '@/components/postList/PostList'
import Parent from '@/components/children/Parent'
import Child from '@/components/children/Child'

const home = () => {
  return (
    <div>
      <Navbar/>
      Home
      {/* <PostList/> */}

      <Parent>
        <Child/>
      </Parent>
    </div>
  )
}

export default home
