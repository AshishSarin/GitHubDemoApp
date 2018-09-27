import { LOAD_USER_LIST, LOAD_USER_LIST_SUCCESS, LOAD_USER_LIST_FAIL, SEARCH_USER, SEARCH_USER_SUCCESS, SEARCH_USER_FAIL } from "./types";
import { fetchUserListApi, searchUserApi } from "../api/GithubUserApi";


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

export const searchUser = (searchInput) => {
    return (dispatch) => {
        dispatch({ type: SEARCH_USER });
        searchUserApi(searchInput)
            .then(userList => {
                if (userList) {

                    dispatch({ type: SEARCH_USER_SUCCESS, payload: userList });
                } else {
                    searchUserFail(dispatch, "Error in searching user")
                }
            })
            .catch(error => {
                console.log(error);
                searchUserFail(dispatch, "Error in searching user");
            })
    }
}

const loadUserListFail = (dispatch, errorMsg) => {
    dispatch({
        type: LOAD_USER_LIST_FAIL,
        payload: errorMsg
    })
}


const searchUserFail = (dispatch, errorMsg) => {
    dispatch({
        type: SEARCH_USER_FAIL,
        payload: errorMsg
    })
}