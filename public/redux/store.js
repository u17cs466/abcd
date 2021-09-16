import {createStore,combineReducers} from "redux"
import { Reducer } from "./reducer"


// const combinedReducers = combineReducers({
//     reducerOne: Reducer,
// })

export const store = createStore(Reducer)