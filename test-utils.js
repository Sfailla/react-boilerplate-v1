import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { ThemeProvider } from 'react-jss';
import { theme } from './styles/theme';

// this is a handy function that I would utilize for any component
// that relies on the router being in context (kent dodds)
function renderWithRouter(
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [ route ] })
	} = {}
) {
	return {
		...render(
			<ThemeProvider theme={theme}>
				<Router history={history}>{ui}</Router>
			</ThemeProvider>
		),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history
	};
}

const ThemeProviderWrapper = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const CustomRender = (component, options) =>
	render(component, { wrapper: ThemeProviderWrapper, ...options });

// re-export everything from the `react-testing-library`
export * from '@testing-library/react';

// export our custom render method
export { CustomRender as render, renderWithRouter };
