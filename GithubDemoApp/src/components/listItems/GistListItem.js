import React, { Component } from 'react';
import {
    FlatList, View,
    ActivityIndicator, Text
} from 'react-native';
import { connect } from 'react-redux';
import { loadGistList } from '../../actions'
import Hyperlink from 'react-native-hyperlink'


class GistListItem extends Component {

    componentWillMount() {

        const { username } = this.props;
        this.props.loadGistList(username);
    }

    render() {
        if (this.props.isLoadinRepoList) {
            return this.renderGistLoadingIndicator();
        } else if (this.props.gistList) {
            return (
                <FlatList
                    data={this.props.gistList}
                    keyExtractor={(gistItem, index) => {
                        return JSON.stringify(gistItem.id);
                    }}
                    renderItem={(gistItem) => {
                        var item = gistItem.item;
                        return (
                            <Hyperlink linkDefault={true}>
                                <Text style={{ color: '#2980b9', fontSize: 15 }}>
                                    {item.html_url}
                                </Text>
                            </Hyperlink>
                        )
                    }}
                />
            )
        }
    }

    renderGistLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <Text>Loading repository list. Please wait...</Text>
            </View>
        )
    }
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