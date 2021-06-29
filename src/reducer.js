
const initState={
    items:[],
    loading:false,
    error:null
}
const postsReducer=(state=initState,action)=>{
    switch(action.type){
        case"FETCH_POSTS_REQUEST":
            return {
                ...state,
                loading:true,
                error:null,
            }
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                loading:false,
                items:action.payload,
                
                
            }
        case "FETC":
        default:
            return state;
    }
    

}

export default postsReducer;