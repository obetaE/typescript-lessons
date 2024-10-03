//Using components as a props
//Sometimes you need to wrap our componenet with a parent component so our prop type will be different

import React from 'react'


//So he's going to take a prop, children which is gonna be the commponent
const Parent = ({children} : {children:React.ReactNode}) => {
    //essentially what that code means is that nextjs should take any component within this parent component as its "children"
  return <div> 
    <h1>This is the parent</h1>
    {/* Then use the child component here */}
    {children}
  </div>
  
}

export default Parent
