
// TODO: Get base url from .env file using react-native-config
const BASE_URL = 'https://api.github.com';

export const URLConstants = {
    getUserListUrl: BASE_URL + '/users',
    searchUserUrl: BASE_URL + '/search/users'
};