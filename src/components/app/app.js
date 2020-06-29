import React from 'react';
import Header from '../header/Header.js';
import { ThemeProvider, createUseStyles } from 'react-jss';
import { theme } from '../../styles/theme.js';

const useStyles = createUseStyles(theme => ({
	content: {
		marginTop: '5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<div className={classes.content}>
				<code>Remove / Edit Header.js file to get started</code>
			</div>
		</ThemeProvider>
	);
};

export default App;
