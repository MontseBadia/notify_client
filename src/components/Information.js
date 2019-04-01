import React, { Component } from 'react';
import CreateForm from './CreateForm';

class Information extends Component {
  constructor(props) {
    super(props)
    this.createNote = this.createNote.bind(this)
  }

  createNote = (note) => {
    this.props.createNote(note)
  }

  render() { 
    return ( 
      <CreateForm createNote={this.createNote} />
     );
  }
}
 
export default Information;