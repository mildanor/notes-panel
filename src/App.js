import React, { Component } from 'react';
import './App.css';
import Tooltip from './components/Tooltip';
import NotesWrapper from './components/NotesWrapper';
import { Icon } from 'semantic-ui-react'

class App extends Component {
  constructor(){
    super();
    this.state = Object.assign({
        //noteSelected: null,
        notesDisplayed: false
    });
    this.showNotes = this.showNotes.bind(this);
    this.hideNotes = this.hideNotes.bind(this);
} 

hideNotes(event){
  this.setState({
    notesDisplayed: false,
  });
}
showNotes(){
  this.setState({
    notesDisplayed: true
});
}


  render() {
    let { notesDisplayed } = this.state;
    if (notesDisplayed === true) {
      return (
        <div className="App">
        <div className="sidenav">
        <p>Item 1</p>
        <p>Item 2</p>
        <Icon circular inverted color='red' name='write' size='small'/>
      </div>
      <div className="main">
      <NotesWrapper
      handleHideNotes={this.hideNotes}
      />
      </div>
        </div>
      );
    } else {
      return (
        <div className="App">
      <div className="sidenav">
      <p>Item 1</p>
      <p>Item 2</p>
      <p onClick={this.showNotes}> Notes </p>
    </div>
    <div className="main">
    </div>
      </div>
      )
    
    }
  }
}

export default App;
