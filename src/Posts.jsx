import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import Axios from "axios"
import {fetchPosts} from "./actions"
const Posts=()=>{
    const dispatch=useDispatch()  //useDispatch is analogous to mapDispatchToProps
    const state=useSelector(state=>state) //useSeletor is analogous to mapStateToProps
    useEffect(()=>{
        dispatch(fetchPosts( ))
    },[])

    const renderPosts=()=>{
        if(state.loading){
            <h1>loading..</h1>
        }
        return state.items.map(el=>{  //map works only on arrays therefore state.items as its array and state is an object
            return <h3>{el.title}</h3>
        })
    }
    return(

        <div>
            <h1>Posts</h1>

            {renderPosts()}

            {/* {posts.map(post=>{
                return <h3>{post.title}</h3>
            })} */}
        </div>
    )
}
export default Posts;