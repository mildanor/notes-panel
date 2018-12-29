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
        this.handleresetUpdate = this.handleresetUpdate.bind(this);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        //From parent
        this.onHideNotesPanel= this.onHideNotesPanel.bind(this);
		this.state = {
            text: "",
            date: "",
            details: "",
			isEdit: 100,
            allNotes: content,
            addOrEdit: 'Add note'
		};
	}
//this function sets the state with note values
	handleEditNote(item) {
		this.setState({
            text: item.text,
            date: item.date,
            details: item.details,
            isEdit: item.id,
            addOrEdit: 'Edit note'
		});
    }
    //then the rest of the editing can happen

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
    //Math.floor(Math.random() *10) + 10,
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
            details: "",
            addOrEdit: 'Add note'
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
            isEdit: 100,
            addOrEdit: 'Add note'
		});
    }
    
    onHideNotesPanel(e) {
		this.props.handleHideNotes(e);
    }
    
    handleresetUpdate(e){
        this.setState({
            text: "",
            date: "",
            details: "",
            isEdit: 100,
            addOrEdit: 'Add note'
		});
    }

    handleRemoveNote(item){
        let allNotes = this.state.allNotes.slice();
            allNotes.splice(item.id-1, 1);
            this.setState({
            allNotes
        });
        console.log(allNotes);
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
                    resetUpdate={this.handleresetUpdate}
					/>
				<ListNotes
					notesList={this.state.allNotes}
                    editNote={this.handleEditNote}
                    removeNote={this.handleRemoveNote}
					/>
				
				
			</div>
		);
	}
}


export default NotesWrapper;
