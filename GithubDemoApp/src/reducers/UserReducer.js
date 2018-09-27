import { LOAD_USER_LIST, LOAD_USER_LIST_SUCCESS, SEARCH_USER, SEARCH_USER_FAIL, SEARCH_USER_SUCCESS, LOAD_USER_LIST_FAIL } from "../actions/types";

const INITIAL_STATE = {
    userList: [],
    isLoadingUserList: false,
    userDetail: {},
    isLoadingUserDetail: false,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USER_LIST:
            return { ...state, isLoadingUserList: true };
        case LOAD_USER_LIST_SUCCESS:
            return { ...state, isLoadingUserList: false, userList: action.payload };
        case LOAD_USER_LIST_FAIL:
            return { ...state, isLoadingUserList: false, userList: null };

        case SEARCH_USER:
            return { ...state, isLoadingUserList: true };
        case SEARCH_USER_SUCCESS:
            return { ...state, isLoadingUserList: false, userList: action.payload };
        case SEARCH_USER_FAIL:
            return { ...state, isLoadingUserList: false };

        default:
            return state;
    }
}