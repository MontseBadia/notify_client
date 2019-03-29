import React, { Component } from 'react';

class Note extends Component {
  render() { 
    return (
      <div className="note-container">
        <h2>{this.props.note}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
 
export default Note;