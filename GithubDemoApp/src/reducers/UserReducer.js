import { LOAD_USER_LIST, LOAD_USER_LIST_SUCCESS } from "../actions/types";

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
        default:
            return state;
    }
}