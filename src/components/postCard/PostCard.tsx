import { PostProps } from '@/types/types';
import React from 'react'


//PostCard is gonna be used to show each post

//We're gonna take each post as a props
const PostCard = (props : PostProps) => {
    //We see the first warning is that for the props there's no type, meaning it's undefined because we did'nt give it a type
    //So we added an object type which is {title:string; desc: string} which is in the type alias PostProps
  return <div className='postCard'>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
  </div>
  
};


//You can still destructure your props
{/*
    const PostCard = ({title,body}) => {
    //We see the first warning is that for the props there's no type, meaning it's undefined because we did'nt give it a type
    //So we added an object type which is {title:string; desc: string} which is in the type alias PostProps
  return <div className='postCard'>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
  
};*/}
export default PostCard;
