import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineClear, MdRadioButtonUnchecked } from 'react-icons/md';

const ToDoItem = (props) => {
	const { id, todoCompleted, todoName, completeTodo, removeTodoItem } = props;
	return (
		<li id={id} className="to-do-list-item list-group-item">
			<span
				onClick={completeTodo}
				className={`complete-button ${
					todoCompleted ? 'complete-button-checked' : ''
				}`}
			>
				{todoCompleted ? <FaCheckCircle /> : <MdRadioButtonUnchecked />}
			</span>
			<p className="to-do-list-item-title">{todoName}</p>
			<span onClick={removeTodoItem} className="clear-button">
				<MdOutlineClear />
			</span>
		</li>
	);
};

export default ToDoItem;
