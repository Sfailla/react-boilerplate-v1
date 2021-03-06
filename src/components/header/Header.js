import React from 'react';
import logo from '../../svg/react-logo.svg';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	header: {
		height: '25rem',
		backgroundColor: '#333',
		letterSpacing: '2px',
		textTransform: 'uppercase',
		textAlign: 'center'
	},
	flexContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	heading: {
		color: 'magenta'
	},
	subHeading: {
		fontSize: '3.2rem',
		color: 'cyan'
	},
	svg: {
		paddingLeft: '2rem',
		width: '200px',
		height: '150px'
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.header}>
			<div className={classes.flexContainer}>
				<h2 className={classes.heading}>New React Project</h2>
				<img className={classes.svg} src={logo} alt="react-logo" />
			</div>
		</div>
	);
};

export default Header;
