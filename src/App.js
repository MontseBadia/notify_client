import React, { Component } from 'react';
import './App.css';
import Collection from './components/Collection';
import Information from './components/Information';
import axios from 'axios';

class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/notes.json')
    .then(response => {
      this.setState({
        notes: response.data
      })
      // console.log(this.state.notes)
    })
    .catch(error => console.log(error))
  }

  createNote = note => {
    const notes = [...this.state.notes]
    notes.push(note)
    this.setState({notes})
  }

  render() {
    return (
      <div className="flex">
        <div><Collection notes={this.state.notes} /></div>
        <div><Information createNote={this.createNote} /></div>
      </div>
    );
  }
}

export default App;