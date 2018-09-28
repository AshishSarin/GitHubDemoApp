
import React, { Component } from 'react';
import { HomeStack } from './routes/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';



export default class App extends Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <HomeStack />
      </Provider>
    );
  }
}
