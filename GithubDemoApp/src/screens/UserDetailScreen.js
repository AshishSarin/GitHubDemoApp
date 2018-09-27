import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View, Text, ActivityIndicator,
    ScrollView, FlatList
} from 'react-native';
import { loadUserDetail } from '../actions';
import { UserOverview } from '../components/layouts';
import { RepoListItem, GistListItem } from '../components/listItems';

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
            return <ScrollView>
                {this.rendeUserOverview()}
                {this.renderRepoGistList()}
            </ScrollView>
        } else {
            return <Text>Error in loading userDetail</Text>
        }

    }

    renderUserLoadingIndicator() {
        return (
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator />
                <Text>Loading user details. Please wait...</Text>
            </View>
        )
    }

    renderRepoGistList() {
        return (
            <View>
                {this.renderRepoList()}
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