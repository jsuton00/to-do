import React from 'react';
import { Link } from 'react-router-dom';

const AppFooterNavbar = () => {
	return (
		<div className="app-footer-navbar row">
			<div className="app-footer-navbar-nav-items row">
				<Link to="/" className="app-footer-navbar-nav-link all-link">
					<div className="app-footer-navbar-nav-item">All</div>
				</Link>
				<Link to="/active" className="app-footer-navbar-nav-link active-link">
					<div className="app-footer-navbar-nav-item">Active</div>
				</Link>
				<Link
					to="/completed"
					className="app-footer-navbar-nav-link completed-link"
				>
					<div className="app-footer-navbar-nav-item">Completed</div>
				</Link>
			</div>
		</div>
	);
};

export default AppFooterNavbar;
