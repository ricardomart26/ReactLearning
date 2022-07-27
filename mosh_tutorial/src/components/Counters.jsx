import React, { Component } from 'react';
import Counter from './Counter';
// import logo from './logo.svg';
// import addForm from './addForm';

class Counters extends Component {

	state = {
		counters: [
			{id:1, title:'Camisola', value:0},
			{id:2, title:'Calças', value:0},
			{id:3, title:'Tenis', value:2},
			{id:4, title:'Gorro', value:0}
		]
	};
 	
	// addCounter = () => 
	// {
	// 	// const newCounter = this.state.counters;
	// 	<addForm></addForm>
	// 	// newCounter.push()
	// };
	resetCounters = () => {
		const newCounter = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({counters: newCounter});
	};

	handleIncrement = counter => {

		const countersClone = [...this.state.counters];
		const index = this.state.counters.indexOf(counter);
		countersClone[index] = {...counter};
		countersClone[index].value++;

		this.setState({counters: countersClone});

	}

	handleRemove = counter => {
		if (counter.value === 0)
			return ;
		
		const counterClone = [...this.state.counters];
		const index = this.state.counters.indexOf(counter);

		counterClone[index] = {...counter};
		counterClone[index].value--;

		this.setState({counters: counterClone});
	}


	handleReset = () => {
		const counterClone = [...this.state.counters];

		for (let index = 0; index < counterClone.length(); index++)
			counterClone[index].value = 0;

		this.setState({counters: counterClone});
	}


	render() {
		return (
			<div style={{
				backgroundImage: 'url(./logo192.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center' 
				}}>
				{
					this.state.counters.map(c => 
					<Counter 
						key={c.id} 
						counter={c}
						onIncrement = {this.handleIncrement}
						onRemove = {this.handleRemove}
					>
						{c.title}
					</Counter>)
				}

				<button className='btn btn-primary btn-warning' onClick={this.resetCounters}>Reset</button>
				{/* <button className='btn btn-primary btn-warning' style={{
						height:100,
						width:150,
						marginLeft: 30,
						marginTop: 10
					}} 
					onClick={this.addCounter}>+</button>*/}
			</div>
		);
	};
}
 
export default Counters;
