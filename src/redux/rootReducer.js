import { combineReducers } from "redux";
import productReducer from "./reducer";

export const rootreducer = combineReducers({
    // cart:cartReducer
    product:productReducer
})