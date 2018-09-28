import { combineReducers } from 'redux';
import UserListReducer from './UserListReducer';
import UserDetailReducer from './UserDetailReducer';

export default combineReducers({
    userList: UserListReducer,
    userDetail: UserDetailReducer
})