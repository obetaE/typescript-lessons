{/* CONTEXT API WITH TYPESCRIPT */}
{/* We're gonna use use reducer and use context hook */}

import React from 'react'
import styles from './contexthook.module.css'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

const contexthook = () => {

    //In this code we're gonna create a context api and we'r gonna have a theme state and in this theme state there's gonna be a theme color and default size by using different action
  return (
    <div className={styles.container}>
        <Navbar/>
      <div className={styles.container}></div>
    </div>
  )
}

export default contexthook
