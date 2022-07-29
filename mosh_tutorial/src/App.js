import React, { Component } from 'react';
import Counters from './components/Counters';
import NavBar from './components/NavBar';

class App extends Component {

	state = {
		counters: [
			{id:1, title:'Camisola', value:0},
			{id:2, title:'Calças', value:0},
			{id:3, title:'Tenis', value:2},
			{id:4, title:'Gorro', value:0}
		],
	};

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
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({counters});
	}

	handleDelete = counter => {
		const countersClone = [...this.state.counters];

		countersClone.splice(this.state.counters.indexOf(counter), 1);
		this.setState({counters: countersClone});

	}

	render() { 
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>

				<main className="Container">

					<Counters counters={this.state.counters}
					onIncrement = {this.handleIncrement}
					onRemove = {this.handleRemove}
					onReset = {this.handleReset}
					onDelete = {this.handleDelete}/>

				</main>	
			</React.Fragment>
		);
	}
}
 
export default App;
