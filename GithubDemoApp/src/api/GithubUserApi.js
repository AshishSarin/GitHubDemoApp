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