import {createStore,combineReducers} from "redux";
import categoriesReducer from "./reducers/categories-reducer"
const rootReducer=combineReducers({
    categoryState:categoriesReducer
    
})
const store=createStore(rootReducer)
 
export default store