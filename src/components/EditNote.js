import React, { Component }  from 'react';

class EditNote extends React.Component {
	constructor(props) {
		super(props);
        this.onChangeTextEdit = this.onChangeTextEdit.bind(this);
        this.onChangeEditDate = this.onChangeEditDate.bind(this);
        this.onChangeEditDetails= this.onChangeEditDetails.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
        var text = this.refs.text.value.trim();
        var date = this.refs.date.value.trim();
        var details = this.refs.details.value.trim();
/*
		if (!text) {
			alert("This field cannot be empty");
			return;
		}
*/
		if (this.props.isEdit) {
			var updateNote= {
				id: this.props.isEdit,
                text: text,
                date: date,
                details: details
			};
			this.props.onNoteUpdate(updateNote);
			console.log("is Updated");
		} else {
			this.props.onNoteAdd(text, date, details);
			console.log('is Created');
		}
	}
	onChangeTextEdit(e) {
        this.props.changeTextEdit(e.target.value);
    }
    onChangeEditDate(e) {
		this.props.changeDateEdit(e.target.value);
    }
    onChangeEditDetails(e) {
		this.props.changeDetailsEdit(e.target.value);
	}
	render() {
		return (
			<div>
				<h1>Edit or add note</h1>
				<form onSubmit={this.onSubmit}>
					<label>
						Title:
						<input
							type="text"
							placeholder="Add note"
                            ref="text"
                            name='text'
							value={this.props.text}
							onChange={this.onChangeTextEdit}
							required
                            />
                            Details:
                            <input
							type="text"
							placeholder="Details"
                            ref="details"
                            name='details'
							value={this.props.details}
							onChange={this.onChangeEditDetails}
							required
                            />
                            Due by:
                            <input
							type="text"
							placeholder="Date"
                            ref="date"
                            name= "date"
							value={this.props.date}
							onChange={this.onChangeEditDate}
							required
							/>
						<input type="submit" value="submit" />
					</label>
				</form>
			</div>
		);
	}
}

export default EditNote;