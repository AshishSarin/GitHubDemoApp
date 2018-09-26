import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    FlatList, ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { loadUserList } from '../actions';
import { UserListItem } from '../components/listItems';

class UserListScreen extends Component {

    componentWillMount() {
        this.props.loadUserList();
    }

    render() {
        return (
            <View style={{ backgroundColor: '#f0f0f0' }}>
                {this.renderUserList()}
            </View>
        );
    }

    componentDidUpdate() {
        if (!this.props.isLoadingUserList) {
            // console.warn(this.props.userList);
        }
    }


    renderUserList() {
        if (this.props.isLoadingUserList) {
            return this.renderUserLoadingIndicator()
        }
        return (
            <FlatList
                data={this.props.userList}
                keyExtractor={(dataItem, index) => {
                    return dataItem.login;
                }}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={dataItem => {
                    let userItem = dataItem.item;
                    return (
                        <UserListItem
                            onPressUserItem={() => { this.onPressUserItem() }}
                            userItem={userItem} />
                    );
                }}
            />
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                    marginLeft: 86
                }}
            />
        );
    };

    renderUserLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center' }}>
                <ActivityIndicator />
                <Text>Loading users. Please wait...</Text>
            </View>
        )
    }

    onPressUserItem(userItemUrl) {
        console.warn('pressed')
        const { navigate } = this.props.navigation;
        navigate('UserDetail', {
            userItemUrl: userItemUrl
        });
    }
}


const mapStateTopProps = (state) => {
    return {
        userList: state.user.userList,
        isLoadingUserList: state.user.isLoadingUserList
    };
}

export default connect(mapStateTopProps, {
    loadUserList
})(UserListScreen);