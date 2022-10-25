import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
	const { allTodos, completeTodo, removeTodoItem } = props;
	return (
		<ul className="to-do-list all-to-do-list list-group">
			{allTodos.length > 0
				? allTodos.map((todo, index) => {
						return (
							<ToDoItem
								key={Math.random()}
								id={todo.id}
								todoCompleted={todo.completed}
								todoName={todo.name}
								completeTodo={() => completeTodo(index)}
								removeTodoItem={() => removeTodoItem(index)}
							/>
						);
				  })
				: 'No tasks. Add a new task.'}
		</ul>
	);
};

export default ToDoList;
