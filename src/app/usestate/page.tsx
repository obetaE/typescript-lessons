//aim of this page is to store the username with this usestate hook
"use client"
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './usestate.module.css'
import { useState } from 'react'

type UserType={
    sessionId:number,
    name:string,
}

const usestate = () => {
    const [username,setUsername] = useState("")
    const [user,setUser] = useState<UserType | null>(null)


            //this is basically saying that whenever the value of username changes, the code will update the username
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(e.target.value)
    }


    //We're going to update our user using this username
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    setUser({
        name:username,
        sessionId: Math.random(),
    })
    }
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.content}>
       { user ? (`${user.name} logged in`) : (<form >
            <input type="text" placeholder="UserName" onChange={handleChange} />
            <button onClick={handleClick}>Login</button>
        </form>)}
        
        {/* So what`s happening is very simple, so th usestate has the value null. But with the type alias we gave it two values, either null or it has data but null is the default so when does it have data? That's why we use the condition function ? saying when user is logged in the value of the usestate isn't null */}

        {user?.name}
      </div>
    </div>
  )
}

export default usestate
