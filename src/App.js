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
    this.setState({ notes })
  }

  deleteNote = id => {
    axios.delete(`http://localhost:5000/notes/${id}`)
      .then(response => {
        if (response.status === 204) {
          const notes = [...this.state.notes]
          const updatedNotes = notes.filter((note) => {
            return note.id !== id;
          });
          this.setState({
            notes: updatedNotes
          })
        }
      })
      .catch(error => console.log(error))
  }

  search = input => {
    console.log(this.state.notes)
    const notes = [...this.state.notes]
    const updatedNotes = []
    updatedNotes.push(notes.find((note) => {
      return note.title.includes(input) || note.text.includes(input)
    }))
    this.setState({
      notes: updatedNotes
    })
  }

  render() {
    return (
      <div className="flex">
        <div><Collection notes={this.state.notes} deleteNote={this.deleteNote} search={this.search} /></div>
        <div><Information createNote={this.createNote} /></div>
      </div>
    );
  }
}

export default App;