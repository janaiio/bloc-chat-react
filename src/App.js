import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

var config = {
  apiKey: "AIzaSyAdYXd2A50qFgrA4h-5ps2Dn5C1OAuX2WU",
  authDomain: "bloc-chat-react-project.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-project.firebaseio.com",
  projectId: "bloc-chat-react-project",
  storageBucket: "bloc-chat-react-project.appspot.com",
  messagingSenderId: "102814688722"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
