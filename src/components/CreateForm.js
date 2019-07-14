import React, { Component } from 'react';
import axios from 'axios';

class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }

    // this.createNote = this.createNote.bind(this)
  }

  createNote = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/notes', {
      note: {
        title: this.state.title,
        text: this.state.content
      }
    }).then(response => {
      // console.log(response.data)
      this.props.createNote(response.data);
      this.setState({
        title: '',
        content: ''
      })
    }).catch(error => console.log(error));
    // e.currentTarget.reset()
  };

  handleChange = (key) => {
    return (e) => {
      this.setState({[key]: e.target.value});
    }
  }

  render() {  
    const { title, content } = this.state;

    return (
      <form className="form" onSubmit={this.createNote}>
        <input name="title" type="text" placeholder="Title" value={title} onChange={this.handleChange('title')} /><br />
        <input name="content" type="text" placeholder="Content" value={content} onChange={this.handleChange('content')} /><br />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

export default CreateForm;