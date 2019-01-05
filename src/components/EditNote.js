import React  from 'react';

class EditNote extends React.Component {
	constructor(props) {
		super(props);
        this.onChangeTextEdit = this.onChangeTextEdit.bind(this);
        this.onChangeEditDate = this.onChangeEditDate.bind(this);
        this.onChangeEditDetails= this.onChangeEditDetails.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onReset = this.onReset.bind(this);
		this.removeNote = this.removeNote.bind(this);
	}

	onReset(e){
		this.props.resetUpdate(e);
	}

	onSubmit(e) {
		e.preventDefault();
        var text = this.refs.text.value.trim();
        var date = this.refs.date.value.trim();
        var details = this.refs.details.value.trim();

		if (this.props.isEdit) {
			var updateNote= {
				id: this.props.isEdit,
                text: text,
                date: date,
                details: details
			};
			this.props.onNoteUpdate(updateNote);
			//console.log("is Updated");
		} else {
			this.props.onNoteAdd(text, date, details);
			//console.log('is Created');
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

	removeNote(){
		var removingNote = {
			id: this.props.id
		}
		this.props.removeNote(removingNote);
	}

	render() {
			return (
				<div className="note-form">
					<h1>{this.props.addOrEdit}</h1>
					<form>
							<input
								type="text"
								placeholder="Note"
								ref="text"
								name='text'
								value={this.props.text}
								onChange={this.onChangeTextEdit}
								required
								/>
								
								<textarea
								type="text"
								className="form-input"
								placeholder="Additional Details"
								ref="details"
								name='details'
								value={this.props.details}
								onChange={this.onChangeEditDetails}
								required
								/>
							   <label>Due by:</label> 
								<input
								type="date"
								placeholder="Date"
								ref="date"
								name= "date"
								value={this.props.date}
								onChange={this.onChangeEditDate}
								required
								/>
							
						
						<button className ="submit" onClick={this.onSubmit}>Submit</button>
						<button className ="cancel" onClick={this.onReset}>Cancel</button>
						{ this.props.isEdit ? <button className ="Delete" onClick={this.removeNote}>Delete</button> : null }
					</form>
				</div>
			)
		} 
}

export default EditNote;