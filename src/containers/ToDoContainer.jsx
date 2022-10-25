import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Input from '../components/Input';

const ToDoContainer = (props) => {
	const { children } = props;
	const [isOpen, setIsOpen] = useState(false);

	const onToggle = () => setIsOpen(!isOpen);

	return (
		<div className="app container">
			<div className="app-header row">
				<h1 className="app-title">Todo</h1>
				<div className="app-theme-toggle-button">
					<button type="button" className="toggle-button" onClick={onToggle}>
						{isOpen ? <FaMoon /> : <FaSun />}
					</button>
				</div>
			</div>
			<Input />
			{children}
		</div>
	);
};

export default ToDoContainer;
