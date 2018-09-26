
import { createStackNavigator } from 'react-navigation';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

export const HomeStack = createStackNavigator({
    UserList: {
        screen: UserListScreen,
        navigationOptions: {
            title: 'Github Users'
        }
    },
    UserDetail: {
        screen: UserDetailScreen,
        navigationOptions: {
            title: 'User Details'
        }
    }
},
    {
        initialRouteName: 'UserList',
    }
) 
