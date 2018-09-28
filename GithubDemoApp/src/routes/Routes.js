
import { createStackNavigator } from 'react-navigation';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import {
    TITLE_USER_LIST_SCREEN,
    TITLE_USER_DETAIL_SCREEN
} from '../values/strings';

export const HomeStack = createStackNavigator({
    UserList: {
        screen: UserListScreen,
        navigationOptions: {
            title: TITLE_USER_LIST_SCREEN
        }
    },
    UserDetail: {
        screen: UserDetailScreen,
        navigationOptions: {
            title: TITLE_USER_DETAIL_SCREEN
        }
    }
},
    {
        initialRouteName: 'UserList',
    }
) 
