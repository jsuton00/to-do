import React, { useState } from 'react';

const Input = (props) => {
	const { addTodoItem } = props;

	const [inputValue, setInputValue] = useState('');

	const onChange = (e) => {
		e.persist();
		return setInputValue(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		return addTodoItem(inputValue);
	};

	return (
		<form onSubmit={onSubmit} className="input-container row">
			<input
				id="to-do-input"
				name="to-do-input"
				type="text"
				onChange={onChange}
				className="to-do-input"
				placeholder="Create a new item..."
				value={inputValue}
			/>
			<span className="to-do-input-icon">+</span>
		</form>
	);
};

export default Input;
