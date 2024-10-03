import React from 'react'
import PostCard from '../postCard/PostCard';
import { PostProps } from '@/types/types';

//Using fetching function to fetch our API which makes a request to the end point (the url)
async function getData(){
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")

    if (!res.ok) {
        throw new Error ("Failed to fetch data");
    }

    return res.json();
    //This sijmply means that if everything is okay it's meant to return a post array
}


//PostList component is gonna be used to fetch our posts
const PostList = async () => {
    const data = await getData();
    //Another way to call the props for the post is by using the post alias here as the const data type i.e const data: PostProps[] = await getData();

    //Calling the getData Function
  return <div className='postList'>
    {/* When we imported PostCard alone as <PostCard/> we see that it gave us an error because PostCard is meant to come with the values "title" and "desc" which were defined under props. So to correct this error we give the values */}
    {/* WE COMMENTED THE CODE BELOW OUT TO SHOW HOW TO FETCH THE DATA WITH AN API */}
    {/* <PostCard title="post title" body="post desc"/> */}
    {/* As we can see It worked cause we already know the data we're going to fetch but what if we are fetching data from an api?*/}

    {/* USING A MAP ARRAY TO FETCH THE DATA */}
    {/* Giving the post function we created in the map array an object type to contain the necessary parameters we need to display the post */}
    {data.map((post : PostProps)=>(
        <PostCard key={post.id} {...post} /> //{...post} is passing a prop to get the post directly from the post function we just created
    ))}

  </div>

};

export default PostList;
