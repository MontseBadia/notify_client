import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className="note-container">
        <h2>{this.props.note}</h2>
        <p>{this.props.text}</p>
        <button onClick={() => this.props.deleteNote(this.props.id)} >Delete</button>
      </div >
    );
  }
}

export default Note;