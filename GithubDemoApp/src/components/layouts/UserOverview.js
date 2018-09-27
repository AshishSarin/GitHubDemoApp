import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class UserOverview extends Component {
    render() {
        const { userData } = this.props;

        return (
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={{ height: 80, width: 80, borderRadius: 40 }}
                        source={{ uri: userData.avatar_url }} />
                    <Text
                        style={{ fontSize: 24, color: 'black' }}
                    >{userData.login}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', width: "50%" }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{'Bio' + ': '}</Text>
                        <Text
                            style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 2, marginRight: 6 }}>
                            {userData.bio ? userData.bio : 'Not Available'}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', width: "50%", marginLeft: 6 }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{'Email' + ': '}</Text>
                        <Text
                            style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 2, marginRight: 6 }}>
                            {userData.email ? userData.email : 'Not Available'}</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', marginTop: 24 }}>
                    <View style={{ flexDirection: 'column', width: "50%" }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{'Followers' + ': '}</Text>
                        <Text
                            style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 2, marginRight: 6 }}>
                            {userData.followers ? userData.followers : 'Not Available'}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', width: "50%", marginLeft: 6 }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{'Following' + ': '}</Text>
                        <Text
                            style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 2, marginRight: 6 }}>
                            {userData.following ? userData.following : 'Not Available'}</Text>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', marginTop: 24 }}>
                    <View style={{ flexDirection: 'column', width: "50%" }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{'Repositories' + ': '}</Text>
                        <Text
                            style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 2, marginRight: 6 }}>
                            {userData.public_repos ? userData.public_repos : 'Not Available'}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', width: "50%", marginLeft: 6 }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{'Gists' + ': '}</Text>
                        <Text
                            style={{ flexWrap: 'wrap', fontSize: 16, marginTop: 2, marginRight: 6 }}>
                            {userData.public_gists ? userData.public_gists : 'Not Available'}</Text>
                    </View>
                </View>

            </View >
        );
    }
}