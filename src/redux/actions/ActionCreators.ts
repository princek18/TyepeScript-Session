import { FETCH, DELETE } from "./ActionTypes";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../..";
import { deleteAction, fetchAction } from "../reducers/FetchReducer";

export const fetchActionCreator = ():ThunkAction<Promise<void>, RootState, {}, fetchAction> => {
    return (dispatch) => {
        return new Promise<void>(async (resolve, reject) => {
            try{
                axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    dispatch({
                        type: FETCH,
                        payload: response.data
                    })
                })
                resolve();
            }
            catch(err){
                console.log(err);
                reject();
            }
        })
    }
}

export const deleteActionCreator = (id: number): deleteAction=> {
    return {
        type: DELETE,
        payload: id
    }
}