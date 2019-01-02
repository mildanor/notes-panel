import React from 'react';

class ListNotes extends React.Component {
	editNote(item) {
		this.props.editNote(item);
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