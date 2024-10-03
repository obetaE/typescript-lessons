"use client"
import React from 'react'
import {useState} from 'react'


const UserReducer = () => {
    const [loading,setLoading] = useState(false);
    const [post,setPost]=useState({});
    const [error,setError]= useState(false);

    const handleFetch = ( ) => {
      setLoading(true);
      setError(false);
      fetch ("https://jsonplaceholder.typicode.com/posts/1")
      .then ((res) => {
        return res.json();
      })
      .then((data)=>{
        //if the loading is successful then you upload the post
          setPost(data);
          setLoading(false)
      })
      .catch((err)=>{
          setError(true)
          setLoading(false)
      });
    }

    //Now as you can see there are six set states in one function
    //USEREDUCER HOOK IS BETTER WHEN YOU'RE HAVING MULTIPLE STATES CHANGE TOGETHER

  return (
    <div>
      <button onClick={handleFetch}>
        {loading ? "Wait..." : "Fetch the post"}
         </button>
      <p>{post?.title}</p>
      <span>{error && "Something went wrong!"}</span>   
    </div>
  );
}; 

export default UserReducer

//CHECK THE SECOND COMMON USE CASE IN FORM JSX
