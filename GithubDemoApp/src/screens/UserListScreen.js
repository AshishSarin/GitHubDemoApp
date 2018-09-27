import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput,
    FlatList, ActivityIndicator, TouchableOpacity, Image
} from 'react-native';
import { connect } from 'react-redux';
import { loadUserList, searchUser } from '../actions';
import { UserListItem } from '../components/listItems';

class UserListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userSearchInput: ''
        }
    }

    componentWillMount() {
        this.props.loadUserList();
    }

    render() {
        return (
            <View style={{ backgroundColor: '#f0f0f0' }}>
                {this.renderSearchInput()}
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
                            onPressUserItem={this.onPressUserItem.bind(this, userItem.login)}
                            userItem={userItem} />
                    );
                }}
            />
        );
    }

    renderSearchInput() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    onSubmitEditing={this.onPressUserSearch.bind(this)}
                    returnKeyType="search"
                    onChangeText={(text) => {
                        if (!text) {
                            this.props.loadUserList();
                        }
                        this.setState({ ...this.state, userSearchInput: text });

                    }}
                    style={{
                        width: "66%", borderWidth: 2,
                        borderColor: 'black', borderRadius: 15
                    }} />
                <TouchableOpacity
                    onPress={this.onPressUserSearch.bind(this)}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
        )
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

    onPressUserItem(username) {
        const { navigate } = this.props.navigation;
        navigate('UserDetail', {
            username: username
        });

    }

    onPressUserSearch() {
        console.warn('Search User', this.state.userSearchInput);
        this.props.searchUser(this.state.userSearchInput);
    }
}

const mapStateTopProps = (state) => {
    return {
        userList: state.user.userList,
        isLoadingUserList: state.user.isLoadingUserList
    };
}


export default connect(mapStateTopProps, {
    loadUserList, searchUser
})(UserListScreen);