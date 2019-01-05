import React from 'react';
import { Icon } from 'semantic-ui-react';

class ListNotes extends React.Component {
	constructor(props) {
		super(props);
        this.addNote = this.addNote.bind(this);
	}
	editNote(item) {
		this.props.editNote(item);
	}

	addNote(e){
		this.props.addNote(e);
	}
	/*
	removeNote(item){
		this.props.removeNote(item);
	}
	*/
	render() {
		let notesList = this.props.notesList;
		return (
			<div>
			<h2 className="title">Notes</h2>
			<h3><Icon onClick={this.addNote} circular inverted color='black' name='add circle' size='small'/>Add Note</h3>
			<input
			type="text"
			placeholder="Filter notes"
			className="notes-filter"
			></input>
				<ul>
					{notesList.map(item => (
						<li key={item.id}>
						<div className="Notes-list">
						<div className ='note-style' onClick={this.editNote.bind(this, item)}>
						{item.text}
						 <p className="date-display"> Follow up by: {item.date}</p>
						</div>
						</div>
					</li>
					))}
				</ul>
			</div>
		);
	}
}
export default ListNotes;