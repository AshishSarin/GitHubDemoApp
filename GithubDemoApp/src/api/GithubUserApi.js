import { URLConstants } from "./URLConstants";


// Github API call for getting all users
export const fetchUserListApi = () => {
    var userList = null;
    return fetch(URLConstants.getUserListUrl, {
        method: 'GET',
    }).then(resp => {
        return resp.json()
            .then(parsedResp => {
                userList = parsedResp;
                return userList;
            })
            .catch(error => {
                console.log(error);
                return userList;
            })
    })
        .catch(error => {
            console.log(error);
            return userList;
        })
}



// Github API call for searching user
export const searchUserApi = (searchInput) => {
    var searchUrl = URLConstants.searchUserUrl + "?q=" + searchInput;
    var userList = null;
    console.warn(searchUrl);
    return fetch(searchUrl, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
            .then(parsedResp => {
                if (parsedResp.items) {
                    userList = parsedResp.items;
                }
                return userList;

            })
            .catch(error => {
                console.log(error);
                return userList;
            });
    })
        .catch(error => {
            console.log(error);
            return userList;
        })
}


export const fetchUserDetailApi = (username) => {
    var userDetailData = null;
    var userDetailUrl = URLConstants.getUserDetailUrl + '/' + username;
    return fetch(userDetailUrl, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
            .then(parsedResp => {
                userDetailData = parsedResp;
                return userDetailData;
            })
            .catch(error => {
                console.log(error);
                return userDetailData;
            })
    })
        .catch(error => {
            console.log(error);
            return userDetailData;
        })
}

export const fetchRepoListApi = (username) => {
    var repoList = null;
    var repoListUrl = URLConstants.getRepoListUrl + '/' + username + '/repos';
    return fetch(repoListUrl, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
            .then(parsedResp => {
                repoList = parsedResp;
                return repoList;
            })
            .catch(error => {
                console.log(error);
                return repoList;
            })
    })
        .catch(error => {
            console.log(error);
            return repoList;
        })
}


export const fetchGistListApi = (username) => {
    var gistList = null;
    var gistListUrl = URLConstants.getGistListUrl + '/' + username + '/gists';
    return fetch(gistListUrl, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
            .then(parsedResp => {
                gistList = parsedResp;
                return gistList;
            })
            .catch(error => {
                console.log(error);
                return gistList;
            })
    })
        .catch(error => {
            console.log(error);
            return gistList;
        })
}