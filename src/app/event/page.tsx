//How to handle events with typescript
"use client"
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './event.module.css'

const event = () => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //first we want to stop the default behaviour of forms that makes the page refresh and to do that you put e in the argument to prevent default and add the type of event this event is which you can see by hovering over the onClick and then pass the html element inside by again hoverinf over the onClick
    //Why Specify HTMLButtonElement?
    //You’re telling TypeScript that this handleClick function is specifically for a button element. This matters because different elements can trigger different types of events, and TypeScript helps us be precise. If you didn’t specify the HTMLButtonElement, TypeScript might think the event could happen on any element, which isn't always what you want.

    e.preventDefault()
    console.log("Searched!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value); // Logs what the user types in the input field
  }

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement>, id:number)=> {
    e.preventDefault()
    console.log(`post ${id} has been deleted`)
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <form className={styles.search}>
          {/* For the text input we're going to be using onChange function  */}
          <input className={styles.textbox} type="text" placeholder='Type what you want to type here' onChange={handleChange}/>


          {/* For the buttons we'd use an onClick function 
         And a self created function handleClick*/}
          <button onClick={handleClick}>Search</button>
        </form>

        <form className={styles.post}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing. 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates explicabo quo cum corporis doloribus ipsam ipsum impedit aut maxime ducimus voluptatum ea excepturi nihil. Nulla porro atque suscipit nisi!
          </p>

          {/* For this we'd be creating a handleDelete function with the onCLick event and we're gonna be passing our post id which is 1 and if you dont pass the event this wont work, this is because we are using parameters*/}
          <button onClick={(e) => handleDelete (e,1)}>Delete</button>
        </form>

        <form className={styles.post}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing. 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates explicabo quo cum corporis doloribus ipsam ipsum impedit aut maxime ducimus voluptatum ea excepturi nihil. Nulla porro atque suscipit nisi!
          </p>
          <button onClick={(e)=>handleDelete (e,2)} >Delete</button>
        </form>

      </div>
    </div>
  )
}

export default event
