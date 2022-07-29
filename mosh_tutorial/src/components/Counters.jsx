import React from 'react';
import Counter from './Counter';

const Counters = ({counters, onIncrement, onRemove, onDelete, onReset}) => {
		return (
			<div style={{
				backgroundImage: 'url(./logo192.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center' 
				}}>
				{
					counters.map(c => 
					<Counter key={c.id} 
						counter={c}
						onIncrement = {onIncrement}
						onRemove = {onRemove}
						onDelete = {onDelete}
					>
						{c.title}
					</Counter>)
				}
				<button className='btn btn-primary btn-warning' 
					onClick={onReset}>Reset</button>

			</div>
		);
}
 
export default Counters;
