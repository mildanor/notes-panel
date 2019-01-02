import React, { Component } from 'react';
import './App.css';
import './styles/styles.css';
import NotesWrapper from './components/NotesWrapper';
import { Icon } from 'semantic-ui-react';

class App extends Component {
  constructor(){
    super();
    this.state = Object.assign({
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
        <Icon circular inverted color='grey' name='home' size='large' className="menu-icon"/>
        <Icon circular inverted color='grey' name='cog' size='large' className="menu-icon"/>
        <Icon circular inverted color='grey' name='write' size='large' className="menu-icon"/>
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
      <Icon circular inverted color='grey' name='home' size='large' className="menu-icon"/> 
      <Icon circular inverted color='grey' name='cog' size='large' className="menu-icon"/>
      <Icon onClick={this.showNotes} circular inverted color='grey' name='write' size='large' className="menu-icon"/>
    </div>
    <div className="main">
    </div>
      </div>
      )
    
    }
  }
}

export default App;
