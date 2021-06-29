import Axios from "axios"
 
const url="https://jsonplaceholder.typicode.com/posts"
export const fetchPosts=()=>{
    return  async(dispatch,getState)=>{
        const response= await Axios.get(url)

        console.log(response.data)

        dispatch({
            type:"FETCH_POSTS",
            payload:response.data
        })
    }
    
}




// export const fetchPosts= async() =>{ 
//     //writing logic for fetching data from api in action creator
//     const response= await Axios.get(url);
//     return {
//         type:"FETCH_POSTS",
//         payload:response.data
//     }
// }