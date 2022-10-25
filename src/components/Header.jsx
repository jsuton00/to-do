import React from 'react';
import bgDesktop from '../assets/images/bg-desktop-dark.jpg';

const Header = () => {
	return (
		<header className="header">
			<img src={bgDesktop} alt="Header banner" className="header-bg-img" />
		</header>
	);
};

export default Header;
