import React from 'react';
import ToDoItem from './ToDoItem';

const ActiveTodoList = (props) => {
	const { activeTodos } = props;
	return (
		<ul className="to-do-list list-group">
			{activeTodos.length > 0
				? activeTodos.map((todo) => {
						return (
							<ToDoItem
								key={Math.random()}
								id={todo.id}
								todoCompleted={todo.completed}
								todoName={todo.name}
							/>
						);
				  })
				: 'No tasks. Add a new task.'}
		</ul>
	);
};

export default ActiveTodoList;
