import React, { Component } from 'react';
import Note from './Note';

class Collection extends Component {
  render() {
    let content;
    if (this.props.notes[0] === undefined) {
       content = <div>Sorry, there are no notes matching your request</div>
    } else {
      content = (
        <ul>
          {this.props.notes.map((note, index) => (
            <li className="li" key={index}><Note note={note.title} text={note.text} id={note.id} deleteNote={this.props.deleteNote} /></li>
          ))}
        </ul>
      )
    }
    
    return (
      <div>
        <h1 className="title">NOTES LIST</h1>
        <form>
          <input className="title" placeholder="Search..." onChange={e => this.props.search(e.target.value)} ></input>
        </form>
        {content}
      </div>
    );
  }
}

export default Collection;