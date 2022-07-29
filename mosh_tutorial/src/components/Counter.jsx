import React, { Component } from 'react';

class Counter extends Component {

	componentWillUnmount() {
		console.log('Component unmounted - ' + this.props.counter.id);
	};

	render()
	{
		const { counter } = this.props;
		return (
			<div>
				<h4>{this.props.children}</h4>
				<span className={this.getBadgeClasses()}>
					{this.formatValue()}
				</span>

				<button 
				onClick={() => this.props.onIncrement(counter)}
				className='btn btn-secondary btn-sm m-2'
				>
					Add Item
				</button>
				
				<button 
				onClick={() => this.props.onRemove(counter)}
				className='btn btn-danger btn-sm m-2'
				>
					Remove
				</button>
				
				<button 
				onClick={() => this.props.onDelete(counter)}
				className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>
			</div>
		);
	};

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
		return classes;
	};

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	};
}
 
export default Counter;
