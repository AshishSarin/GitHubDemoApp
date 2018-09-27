import React, { Component } from 'react';
import {
    FlatList, View,
    ActivityIndicator, Text
} from 'react-native';
import { connect } from 'react-redux';
import { loadRepoList } from '../../actions'
class RepoListItem extends Component {

    componentWillMount() {

        const { username } = this.props;
        this.props.loadRepoList(username);
    }

    render() {
        if (this.props.isLoadingRepoList) {
            return this.renderRepoLoadingIndicator();
        } else if (this.props.repoList) {
            return (
                <FlatList
                    data={this.props.repoList}
                    keyExtractor={(repoItem, index) => {
                        return JSON.stringify(repoItem.ID);
                    }}
                    renderItem={(repoItem) => {
                        var item = repoItem.item;
                        return (
                            <Text>{item.name}</Text>
                        )
                    }}
                />
            )
        }
    }

    renderRepoLoadingIndicator() {
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
        repoList: state.userDetail.repoList,
        isLoadingRepoList: state.userDetail.isLoadingRepoList
    }
}

export default connect(mapStateToProps, {
    loadRepoList
})(RepoListItem);