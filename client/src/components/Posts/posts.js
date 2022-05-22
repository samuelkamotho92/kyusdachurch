import React from 'react'
import Post from "./Post/post";
import {useSelector} from 'react-redux';
const Posts = () => {
    const posts = useSelector((state)=>state.posts);
    console.log(posts)
    return ( 
        <>
    <Post />
     <Post />
     <Post />
        </>
     );
}
 
export default Posts;