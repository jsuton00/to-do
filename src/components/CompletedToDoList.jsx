import React from 'react';
import ToDoItem from './ToDoItem';

const CompletedToDoList = (props) => {
	const { completedTodos } = props;
	return (
		<ul className="to-do-list completed-to-do-list list-group">
			{completedTodos.length > 0 &&
				completedTodos.map((todo) => {
					return (
						<ToDoItem
							key={Math.random()}
							id={todo.id}
							todoCompleted={todo.completed}
							todoName={todo.name}
						/>
					);
				})}
		</ul>
	);
};

export default CompletedToDoList;
