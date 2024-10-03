import React from 'react'
import UserReducer from '../../components/UserReducer/Post'
import Navbar from '@/components/navbar/Navbar'

const post = () => {
  return (
    <div>
        <Navbar/>
      <UserReducer/>
    </div>
  )
}

export default post
