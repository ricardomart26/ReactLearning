import React, { Component } from 'react';
import Counter from './Counter';
// import logo from './logo.svg';

class Counters extends Component {
	state = {
		counters: [
			{id:1, title:'Camisola', value:0},
			{id:2, title:'Calças', value:0},
			{id:3, title:'Tenis', value:2},
			{id:4, title:'Gorro', value:0}
		]
	}
 
	render() { 
		return (
			<div style={{
				backgroundImage: 'url(' + './logo192.png' + ')',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center' 
				}}>
				{
					this.state.counters.map(count => 
					<Counter key={count.id} value={count.value}>
						{count.title}
					</Counter>)
				}
			</div>
		);
	}
}
 
export default Counters;
