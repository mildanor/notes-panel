import React, { Component }  from 'react';

class ListNotes extends React.Component {
	editNote(item) {
		this.props.editNote(item);
	}
	render() {
		let notesList = this.props.notesList;
		return (
			<div>
				<h1>Notes</h1>
				<ul>
					{notesList.map(item => (
                        <li key={item.id}>
							<p className="cursorEdit" onClick={this.editNote.bind(this, item)}>
                                {item.text} Due by: {item.date}
                            </p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default ListNotes;