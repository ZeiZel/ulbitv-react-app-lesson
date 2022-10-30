import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState('Текст в инпуте');

	return (
		<div className='App'>
			<h1>{value}</h1>
			<input
				type='text'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
}

export default App;
