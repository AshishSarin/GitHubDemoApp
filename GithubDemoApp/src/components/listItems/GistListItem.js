import React, { Component } from 'react';
import {
    FlatList, View, TouchableOpacity, Linking,
    ActivityIndicator, Text
} from 'react-native';
import { connect } from 'react-redux';
import { loadGistList } from '../../actions'
import Hyperlink from 'react-native-hyperlink'
import { MSG_EMPTY_GIST_LIST, ERROR_LOADING_GIST_LIST, LOADING_MSG_GIST_LIST } from '../../values/strings';


class GistListItem extends Component {

    componentWillMount() {

        const { username } = this.props;
        this.props.loadGistList(username);
    }

    render() {
        if (this.props.isLoadingGistList) {
            return this.renderGistLoadingIndicator();
        } else if (this.props.gistList) {
            if (this.props.gistList.length > 0) {
                return (
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={this.props.gistList}
                        keyExtractor={(gistItem, index) => {
                            return JSON.stringify(gistItem.id);
                        }}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={(gistItem) => {
                            var item = gistItem.item;
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        var url = item.html_url;
                                        Linking.canOpenURL(url).then(supported => {
                                            if (!supported) {
                                                console.log('Can\'t handle url: ' + url);
                                            } else {
                                                return Linking.openURL(url);
                                            }
                                        }).catch(err => console.error('An error occurred', err));
                                    }}
                                    style={{
                                        height: 60, paddingHorizontal: 24, flexDirection: 'row',
                                        backgroundColor: 'white', alignItems: 'center'
                                    }}>

                                    <Text style={{ color: '#2980b9', fontSize: 15 }}>
                                        {item.html_url}
                                    </Text>
                                </TouchableOpacity>

                            )
                        }}
                    />
                )
            } else {
                return (
                    <Text>{MSG_EMPTY_GIST_LIST}</Text>
                );
            }
        }
        else {
            return (

                <Text>{ERROR_LOADING_GIST_LIST}</Text>
            )
        }
    }

    renderGistLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <Text>{LOADING_MSG_GIST_LIST}</Text>
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
}

const mapStateToProps = state => {
    return {
        gistList: state.userDetail.gistList,
        isLoadinGistList: state.userDetail.isLoadinGistList
    }
}

export default connect(mapStateToProps, {
    loadGistList
})(GistListItem);