import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      inputValue: ''
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

  createRoom(e){
    e.preventDefault()
    this.roomsRef.push({
      name: 'newRoomName' // should be equal to text input value -- currently outputting this value
    });
  }

  handleChange(e){
    this.setState({ inputValue: e.target.value });
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

        <form onSubmit={(e) => this.createRoom(e)}>
          <label>
            New Room Name:
            <input type="text" value={this.state.inputValue} onChange={ e => this.handleChange(e) }/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default RoomList;
