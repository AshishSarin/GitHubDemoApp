import { LOAD_USER_LIST, LOAD_USER_LIST_SUCCESS, LOAD_USER_LIST_FAIL } from "./types";
import { fetchUserListApi } from "../api/GithubUserApi";


export const loadUserList = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_USER_LIST });

        fetchUserListApi()
            .then(userList => {
                if (userList) {

                    dispatch({ type: LOAD_USER_LIST_SUCCESS, payload: userList });
                } else {
                    loadUserListFail(dispatch, "Error in loading user list")
                }
            })
            .catch(error => {
                console.log(error);
                loadUserListFail(dispatch, "Error in loading user list");
            })
    }
}

const loadUserListFail = (dispatch, errorMsg) => {
    dispatch({
        type: LOAD_USER_LIST_FAIL,
        payload: errorMsg
    })
}