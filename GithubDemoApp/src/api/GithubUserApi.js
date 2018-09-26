import { URLConstants } from "./URLConstants";

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
    });
}