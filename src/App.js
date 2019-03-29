import React, { Component } from 'react';
import './App.css';
import Note from './components/Note';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/notes.json')
    .then(response => {
      this.setState({
        notes: response.data
      })
      console.log(this.state.notes)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>NOTES LIST</h1>
        <ul>
          {this.state.notes.map( (note, index) => (
            <li key={index}><Note note={note.title} text={note.text} /></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
