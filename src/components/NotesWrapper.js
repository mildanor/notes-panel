import React  from 'react';
import content from '../data/content';
import EditNote from './EditNote';
import ListNotes from './ListNotes';
import { Icon } from 'semantic-ui-react';


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
        this.addNoteMode=this.addNoteMode.bind(this);
        //From parent
        this.onHideNotesPanel= this.onHideNotesPanel.bind(this);
		this.state = {
            text: "",
            date: "",
            details: "",
			isEdit: 0,
            allNotes: content,
            addOrEdit: 'Add note',
            currentModeEdit: false
		};
	}
//this function sets the state with note values
	handleEditNote(item) {
		this.setState({
            text: item.text,
            date: item.date,
            details: item.details,
            isEdit: item.id,
            addOrEdit: 'Edit note',
            currentModeEdit: true
		});
    }
    //then the rest of the editing can happen

	handleChangeTextEdit(text) {
        this.setState({ 
            text: text,
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
		var newNote = {
			id: this.state.allNotes.length + 1,
            text: text,
            date: date,
            details: details
        };
       // console.log(newNote);
		this.setState({
			allNotes: this.state.allNotes.concat(newNote),
            text: "",
            date: "",
            details: "",
            addOrEdit: 'Add note',
            currentModeEdit: false
		});
	}
	handleNoteUpdate(note) {
		var allNotes = this.state.allNotes;
		for (var i = 0; i < allNotes.length; i++) {
			if (allNotes[i].id === note.id) {
				allNotes.splice(i, 1);
			}
		}
		allNotes.push(note);
		this.setState({
			allNotes: allNotes,
            text: "",
            date: "",
            details: "",
            isEdit: 0,
            addOrEdit: 'Add note',
            currentModeEdit: false
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
            isEdit: 0,
            addOrEdit: 'Add note',
            currentModeEdit: false
		});
    }

    handleRemoveNote(item){
        let allNotes = this.state.allNotes.slice();
        allNotes.splice(item.id-1, 1);
            this.setState({
            allNotes,
            text: "",
            date: "",
            details: "",
            isEdit: 0,
            addOrEdit: 'Add note',
            currentModeEdit: false
        });
        //console.log(allNotes);
    }

    addNoteMode(e){
        this.setState({
            currentModeEdit: true
		});
    }

	render() {
            return (
                <div className="notes-background">
                <Icon onClick={this.onHideNotesPanel} circular inverted color='red' name='close' size='small' className="close-icon"/>
               {this.state.currentModeEdit ? 
                <EditNote
                onNoteAdd={this.handleNoteAdd}
                {...this.state}
                changeTextEdit={this.handleChangeTextEdit}
                changeDateEdit={this.handleChangeDateEdit}
                changeDetailsEdit={this.handleChangeDetailsEdit}
                onNoteUpdate={this.handleNoteUpdate}
                resetUpdate={this.handleresetUpdate}
                removeNote={this.handleRemoveNote}
                />
                :
                <ListNotes
                notesList={this.state.allNotes}
                editNote={this.handleEditNote}
                addNote={this.addNoteMode} 
                />   
            }
                       
                </div>
            );
		
	}
}


export default NotesWrapper;
