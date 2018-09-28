import React, { Component } from 'react';
import {
    FlatList, View, TouchableOpacity,
    ActivityIndicator, Text, Image, Linking
} from 'react-native';
import { connect } from 'react-redux';
import { loadRepoList } from '../../actions';
import { LOADING_MSG_REPO_LIST, ERROR_LOADING_REPO_LIST, MSG_EMPTY_REPO_LIST } from '../../values/strings';
class RepoListItem extends Component {

    componentWillMount() {

        const { username } = this.props;
        this.props.loadRepoList(username);
    }

    render() {
        if (this.props.isLoadingRepoList) {
            return this.renderRepoLoadingIndicator();
        } else if (this.props.repoList) {
            if (this.props.repoList.length > 0) {
                return (
                    <FlatList
                        style={{ marginTop: 6 }}
                        data={this.props.repoList}
                        keyExtractor={(repoItem, index) => {
                            return JSON.stringify(repoItem.id);
                        }}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={(repoItem) => {
                            var item = repoItem.item;
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
                                    <Text
                                        style={{ flex: 1 }}
                                    >{item.name}</Text>
                                    <Image
                                        style={{ height: 25, width: 25 }}
                                        source={require('../../images/icon_forward.png')}
                                    />
                                </TouchableOpacity>
                            )
                        }}
                    />
                )
            }
            else {
                return (
                    <Text>{MSG_EMPTY_REPO_LIST}</Text>
                );
            }
        }
        else {
            return (

                <Text>{ERROR_LOADING_REPO_LIST}</Text>
            )
        }

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

    renderRepoLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <Text>{LOADING_MSG_REPO_LIST}</Text>
            </View>
        )
    }
}



const mapStateToProps = state => {
    return {
        repoList: state.userDetail.repoList,
        isLoadingRepoList: state.userDetail.isLoadingRepoList
    }
}

export default connect(mapStateToProps, {
    loadRepoList
})(RepoListItem);