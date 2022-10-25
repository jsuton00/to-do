import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ActiveTodoList from './components/ActiveToDoList';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppFooterNavbar from './components/AppFooterNavbar';
import CompletedToDoList from './components/CompletedToDoList';
import Header from './components/Header';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import data from './data/data.json';

const App = () => {
	const [allTodoList, setAllTodoList] = useState(data);

	const [completedTodoList] = useState(
		allTodoList.filter((todos) => todos.completed === true) || [],
	);
	const [activeTodoList] = useState(
		allTodoList.filter((todos) => todos.completed === false) || [],
	);
	const [activeTodosCount, setActiveTodosCount] = useState(
		allTodoList.filter((todo) => todo.completed === false).length || 0,
	);

	const addTodoItem = (todoName) => {
		const newToDo = [...allTodoList, { name: todoName, completed: false }];
		setAllTodoList(newToDo);
		setActiveTodosCount(
			newToDo.filter((todo) => todo.completed === false).length,
		);
	};

	const completeTodo = (index) => {
		const newToDo = [...activeTodoList];

		if (newToDo[index].completed === true) {
			newToDo[index].completed = false;
			setAllTodoList(newToDo);
			setActiveTodosCount(
				newToDo.filter((todo) => todo.completed === false).length,
			);
		} else {
			newToDo[index].completed = true;
			setAllTodoList(newToDo);
			setActiveTodosCount(
				newToDo.filter((todo) => todo.completed === false).length,
			);
		}
	};

	const removeTodoItem = (index) => {
		const newToDo = [...allTodoList];
		newToDo.splice(index, 1);
		setAllTodoList(newToDo);
		setActiveTodosCount(
			newToDo.filter((todo) => todo.completed === false).length,
		);
	};

	const removeCompletedTodos = () => {
		let updatedTodoList = allTodoList.filter(
			(todo) => todo.completed === false,
		);
		setAllTodoList(updatedTodoList);
		setActiveTodosCount(
			updatedTodoList.filter((todo) => todo.completed === false).length,
		);
	};

	return (
		<>
			<Header />
			<div className="app container">
				<AppHeader />
				<Input addTodoItem={addTodoItem} />
				<Routes>
					<Route
						path="/"
						element={
							<ToDoList
								allTodos={allTodoList}
								completeTodo={completeTodo}
								removeTodoItem={removeTodoItem}
							/>
						}
					/>
					<Route
						path="/completed"
						element={<CompletedToDoList completedTodos={completedTodoList} />}
					/>
					<Route
						path="/active"
						element={<ActiveTodoList activeTodos={activeTodoList} />}
					/>
				</Routes>
				<AppFooter
					activeTodosCount={activeTodosCount}
					removeCompletedTodos={removeCompletedTodos}
				/>
				<AppFooterNavbar />
			</div>
		</>
	);
};

export default App;
