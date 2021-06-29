import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import Axios from "axios"
import {fetchPosts} from "./actions"
const Posts=()=>{
    const dispatch=useDispatch()
    const posts=useSelector(state=>state)
    useEffect(()=>{
        dispatch(fetchPosts( ))
    },[])
    return(

        <div>
            <h1>Posts</h1>
            {posts.map(post=>{
                return <h3>{post.title}</h3>
            })}
        </div>
    )
}
export default Posts;