import { SET_CATEGORIES } from "../reducers/categories-reducer"

export const setCategories=(payload)=>{
   return{
    type:SET_CATEGORIES,
    payload
   } 
} 