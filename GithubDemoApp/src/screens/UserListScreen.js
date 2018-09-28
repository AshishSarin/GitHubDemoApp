import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, ScrollView,
    FlatList, ActivityIndicator, TouchableOpacity, Image
} from 'react-native';
import { connect } from 'react-redux';
import { loadUserList, searchUser } from '../actions';
import { UserListItem } from '../components/listItems';
import { LOADING_MSG_USER_LIST, ERROR_LOADING_USER_DETAIL, ERROR_LOADING_USER_LIST } from '../values/strings';

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
            <View style={{ backgroundColor: '#f0f0f0', flex: 1 }}>
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
        if (this.props.userList) {
            if (this.props.userList.length > 0) {
                return (
                    <FlatList
                        style={{ flex: 1 }}
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
            } else {
                return (
                    <Text style={{
                        flex: 1, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {ERROR_LOADING_USER_LIST}
                    </Text>
                )
            }
        } else {
            return (
                <Text style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {ERROR_LOADING_USER_LIST}
                </Text>
            )
        }
    }

    renderSearchInput() {
        return (
            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                alignItems: 'center', backgroundColor: 'white',
                paddingTop: 24, paddingBottom: 24
            }}>
                <TextInput
                    onSubmitEditing={this.onPressUserSearch.bind(this)}
                    placeholder={"Search User"}
                    placeholderTextColor={'grey'}
                    returnKeyType="search"
                    onChangeText={(text) => {
                        if (!text) {
                            this.props.loadUserList();
                        }
                        this.setState({ ...this.state, userSearchInput: text });

                    }}
                    style={{
                        width: "66%", borderWidth: 2, height: 50, paddingHorizontal: 12,
                        borderColor: 'grey', borderTopLeftRadius: 15, borderBottomLeftRadius: 15
                    }} />
                <TouchableOpacity
                    style={{
                        backgroundColor: 'grey', height: 50, width: 50,
                        justifyContent: 'center', alignItems: 'center', marginLeft: -1,
                        borderTopRightRadius: 15, borderBottomRightRadius: 15
                    }}
                    onPress={this.onPressUserSearch.bind(this)}
                >
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require('../images/icon_search.png')}
                    />
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
                    marginLeft: 0
                }}
            />
        );
    };

    renderUserLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <Text>{LOADING_MSG_USER_LIST}</Text>
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
        this.props.searchUser(this.state.userSearchInput);
    }
}

const mapStateTopProps = (state) => {
    return {
        userList: state.userList.userList,
        isLoadingUserList: state.userList.isLoadingUserList
    };
}


export default connect(mapStateTopProps, {
    loadUserList, searchUser
})(UserListScreen);