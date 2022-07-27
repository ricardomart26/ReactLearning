import React, { Component } from 'react';

class addForm extends Component {
	state = {  } 
	render() { 
		return (
		<div style={{
			// height: 50,
			// width: 100
		}}>
			<label> 
				name: 
			<input type="text" name="name"/>
			</label>
			<input type="submit"/>
		</div>);
	}
}
 
export default addForm;
