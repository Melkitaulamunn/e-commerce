export const SET_CATEGORIES="SET_CATEGORIES"
const initialState={
    categories:[],
    initialized:false
}
const  categorysReducer=(state=initialState,action)=>{
    console.log("category Reducer parametreleri",state,action)
    switch (action.type) {
        case SET_CATEGORIES:
            return{
                ...state,
                initialized:true,
                categories:action.payload
            }
               
            
            
    
    
        default:
            return state
    }
    
}
export default categorysReducer