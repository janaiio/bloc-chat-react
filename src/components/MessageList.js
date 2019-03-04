import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "<USERNAME HERE>",
      content: "<CONTENT OF THE MESSAGE HERE>",
      sentAt: "<TIME MESSAGE WAS SENT HERE>",
      roomId: "<ROOM UID HERE>"
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount(){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  render() {
    return (
      <section>
      {
        this.state.messages.map( (message, index) =>
        <p className="messages" key={index} > {message.name}</p>,
        )
      }

      </section>
    );
  }
}

export default MessageList;
