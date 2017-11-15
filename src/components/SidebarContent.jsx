import React from 'react';

const SidebarContent = ({user, onManageSpotsClick, onLogoutClick, onSelectPlaceClick}) => {
	return (
		<div style={styles.menu}>
			<div style={styles.menuItem}>
				Bem vindo, {user ? user.name : null}
			</div>
			<hr />
			<ul>
				<li style={styles.menuItem} onClick={onSelectPlaceClick}>Escolher local</li>
				<li style={styles.menuItem} onClick={onManageSpotsClick}>Gerenciar restaurantes</li>
				<li style={styles.menuItem} onClick={onLogoutClick}>Logout</li>
			</ul>
		</div>
	);
};

const styles = {
	menu: {
    	height: '100%',
		padding: '10px 40px',
	    color: 'white',
	    listStyle: 'none',
	    backgroundColor: 'rgba(162, 50, 59, 0.8)'
	},
	menuItem: {
	    padding: '10px 0'
	}
};

export default SidebarContent;