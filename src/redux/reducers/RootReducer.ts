import { combineReducers } from "redux";
import { fetchReducer } from "./FetchReducer";

export const rootReducer = combineReducers({
    fetchReducer: fetchReducer
})