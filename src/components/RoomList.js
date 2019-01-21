import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      value: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  createRoom(){
    this.roomsRef.push({
      name: this.state.value // should be equal to text input value
    });
  }

  render() {
    return (
      <section>
        {
          this.state.rooms.map( (room, index) =>
          <p className="rooms" key={index} > {room.name}</p>,
          console.log(this.state.rooms)
          )
        }

        <form onSubmit={this.createRoom}>
          <label>
            New Room Name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default RoomList;
