import React, { Component } from 'react';
import Note from './Note';

class Collection extends Component {
  render() { 
    return ( 
      <div>
      <h1>NOTES LIST</h1>
      <ul>
        {this.props.notes.map( (note, index) => (
          <li key={index}><Note note={note.title} text={note.text} /></li>
        ))}
      </ul>
    </div>
    );
  }
}
 
export default Collection;