import { Reducer } from "redux";
import { FETCH, DELETE } from "../actions/ActionTypes";

export interface Post{
    id: number,
    title: string,
    body: string
}

interface StoreState{
    Posts: Post[];
}

const initialState = {
    Posts: []
}

export interface fetchAction{
    type: typeof FETCH,
    payload: Post[]
}

export interface deleteAction{
    type: typeof DELETE,
    payload: number
}

export type Actions = fetchAction | deleteAction;

export const fetchReducer:Reducer<StoreState, Actions> = (state = initialState, action) =>{
    switch(action.type){
        case FETCH:
            return {Posts: action.payload};
        case DELETE:
            return { Posts: state.Posts.filter((post) => post.id !== action.payload)};
        default:
            return state;
    }
}