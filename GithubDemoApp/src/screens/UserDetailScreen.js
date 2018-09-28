import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View, Text, ActivityIndicator,
    ScrollView, FlatList
} from 'react-native';
import { loadUserDetail } from '../actions';
import { UserOverview } from '../components/layouts';
import { RepoListItem, GistListItem } from '../components/listItems';
import {
    ERROR_LOADING_USER_DETAIL, LOADING_MSG_USER_DETAIL,
    LABEL_GIST_LIST, LABEL_REPOSITORY_LIST
} from '../values/strings';

class UserDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetailError: ''
        }
    }

    componentWillMount() {
        const { navigation } = this.props;
        var username = navigation.getParam('username', null);
        if (username) {
            this.props.loadUserDetail(username);
        } else {
            this.setState({
                userDetailError: 'Invalid user path'
            });
        }
    }


    render() {
        if (this.props.isLoadingUserDetail) {
            return this.renderUserLoadingIndicator();
        } else if (this.props.userData) {
            return <ScrollView style={{ paddingHorizontal: 0 }}>
                {this.rendeUserOverview()}
                {this.renderRepoGistList()}
            </ScrollView>
        } else {
            return <Text>{ERROR_LOADING_USER_DETAIL}</Text>
        }

    }

    renderUserLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <Text>{LOADING_MSG_USER_DETAIL}</Text>
            </View>
        )
    }

    renderRepoGistList() {

        return (
            <View>
                <Text style={{
                    marginTop: 20, marginLeft: 24,
                    fontSize: 24, color: 'black'
                }}>{LABEL_REPOSITORY_LIST + ':'}
                </Text>
                {this.renderRepoList()}
                <Text style={{
                    marginTop: 24, marginLeft: 24,
                    fontSize: 24, color: 'black'
                }}>{LABEL_GIST_LIST + ':'}</Text>
                {this.renderGistList()}
            </View>
        );
    }

    renderRepoList() {
        return (
            <RepoListItem username={this.props.userData.login} />
        )
    }

    renderGistList() {
        return (
            <GistListItem username={this.props.userData.login} />
        )
    }


    rendeUserOverview() {
        return <UserOverview userData={this.props.userData} />
    }
}


const mapStateToProps = state => {
    return {
        isLoadingUserDetail: state.userDetail.isLoadingUserDetail,
        userData: state.userDetail.userData
    }
}

export default connect(mapStateToProps, {
    loadUserDetail
})(UserDetailScreen)