import {
    LOAD_USER_DETAIL_FAIL, LOAD_USER_DETAIL_SUCCESS,
    LOAD_USER_DETAIL,
    LOAD_REPO_LIST,
    LOAD_REPO_LIST_SUCCESS,
    LOAD_REPO_LIST_FAIL,
    LOAD_GIST_LIST,
    LOAD_GIST_LIST_SUCCESS,
    LOAD_GIST_LIST_FAIL
} from "../actions/types";


const INITIAL_STATE = {

    userData: null,
    isLoadingUserDetail: false,
    isLoadingRepoList: false,
    isLoadingGistList: false,
    repoList: [],
    gistList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USER_DETAIL:
            return { ...state, isLoadingUserDetail: true, userData: null };
        case LOAD_USER_DETAIL_SUCCESS:
            return { ...state, isLoadingUserDetail: false, userData: action.payload };
        case LOAD_USER_DETAIL_FAIL:
            return { ...state, isLoadingUserDetail: false, userData: null };
        case LOAD_REPO_LIST:
            return { ...state, isLoadingRepoList: true, repoList: [] };
        case LOAD_REPO_LIST_SUCCESS:
            return { ...state, isLoadingRepoList: false, repoList: action.payload };
        case LOAD_REPO_LIST_FAIL:
            return { ...state, isLoadingRepoList: false, repoList: [] };
        case LOAD_GIST_LIST:
            return { ...state, isLoadingGistList: true, gistList: [] };
        case LOAD_GIST_LIST_SUCCESS:
            return { ...state, isLoadingGistList: false, gistList: action.payload };
        case LOAD_GIST_LIST_FAIL:
            return { ...state, isLoadingGistList: false, gistList: [] };
        default:
            return state;
    }
}