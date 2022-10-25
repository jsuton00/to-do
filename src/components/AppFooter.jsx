import React from 'react';

const AppFooter = (props) => {
	const { activeTodosCount, removeCompletedTodos } = props;

	const onClick = () => {
		return removeCompletedTodos();
	};
	return (
		<div className="app-footer row">
			<div className="active-to-dos-counter">
				<p className="active-to-dos-counter-text">{`${
					activeTodosCount > 0 ? activeTodosCount : 0
				} items left`}</p>
			</div>
			<div className="clear-completed-to-do-item-section">
				<button
					type="button"
					onClick={onClick}
					className="clear-completed-to-do-item-button"
				>
					Clear Completed
				</button>
			</div>
		</div>
	);
};

export default AppFooter;
