import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import UserDetailReducer from './UserDetailReducer';

export default combineReducers({
    user: UserReducer,
    userDetail: UserDetailReducer
})