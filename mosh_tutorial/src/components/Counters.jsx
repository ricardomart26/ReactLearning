import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	state = {
		counters: [
			{id:1, title:"Camisola", value:0},
			{id:2, title:"Calças", value:0},
			{id:3, title:"Tenis", value:2},
			{id:4, title:"Gorro", value:0}
		]
	}
 
	render() { 
		return (
			<div>
				{
					this.state.counters.map(count => 
					<Counter key={count.id} value={count.value}>
						{count.title}
					</Counter>)
				}
				<img src='vertigemazul.svg' alt='Vertigem azul'></img>
			</div>
		);
	}
}
 
export default Counters;
