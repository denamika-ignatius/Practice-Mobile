import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import reducers from './src/reducers';
import Main from './src/components/Main'
import {Platform, StyleSheet, Text, View} from 'react-native';

class App extends Component {

  componentDidMount(){
    var config = {
      apiKey: "AIzaSyAnAUvY0IkT3dLddjTMRqVyjZOGhgLWx1Y",
      authDomain: "managerjc-41f05.firebaseapp.com",
      databaseURL: "https://managerjc-41f05.firebaseio.com",
      projectId: "managerjc-41f05",
      storageBucket: "managerjc-41f05.appspot.com",
      messagingSenderId: "630919859204"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.disableYellowBox = true;
    return(
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}

export default App;