import React, { Component } from 'react';
import axios from 'axios';

class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }

    this.createNote = this.createNote.bind(this)
  }

  createNote = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/notes', {
      note: {
        title: this.state.title,
        text: this.state.content
      }
    }).then( response => {
      // console.log(response.data)
      this.props.createNote(response.data);
    }).catch( error => console.log(error));
  };

  render() { 
    return ( 
      <form onSubmit={this.createNote}>
        <input name="title" type="text" placeholder="Title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })}/>
        <input name="content" type="text" placeholder="Content" value={this.state.content} onChange={e => this.setState({ content: e.target.value})}/>
        <button type="submit">Create Note</button>
      </form>
     );
  }
}
 
export default CreateForm;