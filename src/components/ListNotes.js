import React, { Component }  from 'react';
import { Icon } from 'semantic-ui-react'

class ListNotes extends React.Component {
	editNote(item) {
		this.props.editNote(item);
	}
	removeNote(item){
		this.props.removeNote(item);
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
							<button onClick={this.removeNote.bind(this, item)}>Remove </button>
							<Icon name= 'trash'/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default ListNotes;