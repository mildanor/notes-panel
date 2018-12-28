import React, { Component }  from 'react';
import content from '../data/content';
import EditNote from './EditNote';
import ListNotes from './ListNotes';


class NotesWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.handleEditNote = this.handleEditNote.bind(this);
        this.handleChangeTextEdit = this.handleChangeTextEdit.bind(this);
        this.handleChangeDateEdit = this.handleChangeDateEdit.bind(this);
        this.handleChangeDetailsEdit = this.handleChangeDetailsEdit.bind(this);
		this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
        //From parent
        this.onHideNotesPanel= this.onHideNotesPanel.bind(this);
		this.state = {
            text: "",
            date: "",
            details: "",
			isEdit: 0,
		    allNotes: content
		};
	}

	handleEditNote(item) {
		this.setState({
            text: item.text,
            date: item.date,
            details: item.details,
			isEdit: item.id
		});
	}
	handleChangeTextEdit(text) {
        this.setState({ 
            text: text,
           // date:date,
            //details:details
         });
    }
    handleChangeDateEdit(date) {
        this.setState({ 
            date: date
         });
    }
    handleChangeDetailsEdit(details) {
        this.setState({ 
            details: details
         });
	}
	handleNoteAdd(text, date, details) {
		var newText = {
			id: this.state.allNotes.length + 1,
            text: text,
            date: date,
            details: details
        };
        console.log(newText);
		this.setState({
			allNotes: this.state.allNotes.concat(newText),
            text: "",
            date: "",
            details: ""
		});
	}
	handleNoteUpdate(note) {
		var allNotes = this.state.allNotes;
		for (var i = 0; i < allNotes.length; i++) {
			if (allNotes[i].id == note.id) {
				allNotes.splice(i, 1);
			}
		}
		allNotes.push(note);
		this.setState({
			allNotes: allNotes,
            text: "",
            date: "",
            details: "",
			isEdit: 0
		});
    }
    
    onHideNotesPanel(e) {
		this.props.handleHideNotes(e);
	}
	render() {
		return (
            <div>
            <p onClick={this.onHideNotesPanel} className="close-button"></p>
            <EditNote
					onNoteAdd={this.handleNoteAdd}
					//text={ this.state.text }
					{...this.state}
                    changeTextEdit={this.handleChangeTextEdit}
                    changeDateEdit={this.handleChangeDateEdit}
                    changeDetailsEdit={this.handleChangeDetailsEdit}
					onNoteUpdate={this.handleNoteUpdate}
					/>
				<ListNotes
					notesList={this.state.allNotes}
					editNote={this.handleEditNote}
					/>
				<hr />
				
			</div>
		);
	}
}


export default NotesWrapper;

/*
class NotesWrapper extends Component {
constructor(){
    super();
    this.state = Object.assign({
        notesData: content
    });
}

  render() {
    //let { notesData } = this.state;
    return (
      <div className = "notes-wrapper">
      {this.state.notesData.map((item, i) => 
        <Note key={i} item={item} />      
     )
    }
    <button> Add note</button>
      </div>
    );
  }
}

export default NotesWrapper;
*/