import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

export default class UserListItem extends Component {
    render() {
        const { userItem, onPressUserItem } = this.props;

        return (
            <TouchableOpacity
                onPress={onPressUserItem}
                style={{
                    height: 60, paddingHorizontal: 24, flexDirection: 'row',
                    backgroundColor: '#f0f0f0', alignItems: 'center'
                }}>
                <Image
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                    source={{ uri: userItem.avatar_url }}
                />
                <Text style={{ marginLeft: 12 }}>{userItem.login}</Text>
            </TouchableOpacity>
        )
    }
}