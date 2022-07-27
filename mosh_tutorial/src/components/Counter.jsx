import React, { Component } from 'react';

class Counter extends Component {

	// handleAdd = () => {
	// 	this.setState({value: this.state.value + 1});
	// }

	// handleRemove = () => {
	// 	if (this.state.value !== 0)
	// 		this.setState({value: this.state.value - 1});
	// }

	render()
	{
		return (
			<div>
				<h4>{this.props.children}</h4>
				<span className={this.getBadgeClasses()}>
					{this.formatValue()}
				</span>

				<button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>
					Add Item
				</button>
				<button onClick={() => this.props.onRemove(this.props.counter)} className='btn btn-danger btn-sm'>
					Remove
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
		return classes;
	}

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}
 
export default Counter;
