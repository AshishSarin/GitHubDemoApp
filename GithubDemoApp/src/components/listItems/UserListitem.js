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
                    style={{ height: 40, width: 40, borderRadius: 20 }}
                    source={{ uri: userItem.avatar_url }}
                />
                <Text style={{ marginLeft: 12, flex: 1, fontSize: 16, color: 'black' }}>{userItem.login}</Text>
                <Image
                    style={{ height: 25, width: 25 }}
                    source={require('../../images/icon_forward.png')}
                />
            </TouchableOpacity>
        )
    }
}