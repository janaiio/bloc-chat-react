import React, { Component } from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      rooms: [],
      newRoomName: ''

    };
  }

  render() {
    return (
      <div className="App">
        <RoomList
          firebase={ firebase }
          activeRoom={this.state.activeRoom}
        />
        <MessageList
          firebase={ firebase }
          activeRoom={this.state.activeRoom}
        />
        <ActiveRoom
          activeRoom={this.state.activeRoom}
        />
      </div>
    );
  }
}

export default App;
