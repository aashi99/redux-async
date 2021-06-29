import Axios from "axios"
 
const url="https://jsonplaceholder.typicode.com/posts"

export const fetchPosts=()=> async(dispatch,getState)=>{
        dispatch({type:"FETCH_POSTS_REQUEST"})           //manually dispatching action
        try{
            const response= await Axios.get(url)
            dispatch({type:"FETCH_POSTS_SUCCESS",payload:response.data})
        } catch(error){
            dispatch({type:"FETCH_POSTS_FAILURE",error:error})
        }
} 

// export const fetchPosts=()=>{
//     return  async(dispatch,getState)=>{   //this is possible due to thunk aour action creator is able to return function
//         const response= await Axios.get(url)

//         console.log(response.data)
                                                        //this action is just for fetching but is not standard pattern
//         dispatch({
//             type:"FETCH_POSTS",          //manually dispatching action
//             payload:response.data
//         })
//     }
    
// }




// export const fetchPosts= async() =>{ 
//     //writing logic for fetching data from api in action creator
//     const response= await Axios.get(url); //action creator can only return plain object with type property can't this things 
//     return {
//         type:"FETCH_POSTS",         //what if action dispatched to reducer even before getting response as its asynchronous
//         payload:response.data
//     }
// }

