import { LOAD_USER_LIST, LOAD_USER_LIST_SUCCESS, LOAD_USER_LIST_FAIL, SEARCH_USER, SEARCH_USER_SUCCESS, SEARCH_USER_FAIL, LOAD_USER_DETAIL, LOAD_USER_DETAIL_SUCCESS, LOAD_REPO_LIST, LOAD_REPO_LIST_FAIL, LOAD_REPO_LIST_SUCCESS, LOAD_GIST_LIST, LOAD_GIST_LIST_FAIL, LOAD_GIST_LIST_SUCCESS } from "./types";
import { fetchUserListApi, searchUserApi, fetchUserDetailApi, fetchRepoListApi, fetchGistListApi } from "../api/GithubUserApi";


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

export const loadUserDetail = (username) => {
    return dispatch => {
        dispatch({ type: LOAD_USER_DETAIL });
        fetchUserDetailApi(username)
            .then(userDetailData => {
                if (userDetailData) {
                    dispatch({ type: LOAD_USER_DETAIL_SUCCESS, payload: userDetailData });
                } else {
                    loadUserDetailFail(dispatch, 'Error in loading user details');
                }
            })
            .catch(error => {
                console.log(error);
                loadUserDetailFail(dispatch, 'Error in loading user details');
            })
    }
}

export const loadRepoList = (username) => {
    return dispatch => {
        dispatch({ type: LOAD_REPO_LIST })
        fetchRepoListApi(username)
            .then(repoList => {
                if (repoList) {
                    dispatch({ type: LOAD_REPO_LIST_SUCCESS, payload: repoList });
                } else {
                    loadRepoListFail(dispatch, "Error in loading repo list");
                }
            })
            .catch(error => {
                console.log(error);
                loadRepoListFail(dispatch, "Error in loading repo list");
            })
    }
}


export const loadGistList = (username) => {
    return dispatch => {
        dispatch({ type: LOAD_GIST_LIST })
        fetchGistListApi(username)
            .then(gistList => {
                if (gistList) {
                    dispatch({ type: LOAD_GIST_LIST_SUCCESS, payload: gistList });
                } else {
                    loadGistListFail(dispatch, "Error in loading gist list");
                }
            })
            .catch(error => {
                console.log(error);
                loadGistListFail(dispatch, "Error in loading gist list");
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

const loadUserDetailFail = (dispatch, errorMsg) => {
    dispatch({
        type: LOAD_USER_LIST_FAIL,
        payload: errorMsg
    })
}

const loadRepoListFail = (dispatch, errorMsg) => {
    dispatch({
        type: LOAD_REPO_LIST_FAIL,
        payload: errorMsg
    })
}


const loadGistListFail = (dispatch, errorMsg) => {
    dispatch({
        type: LOAD_GIST_LIST_FAIL,
        payload: errorMsg
    })
}
