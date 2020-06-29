import React from 'react';
import { render } from '../../../test-utils';

import App from './App';

describe('<App />', () => {
	test('should render app', () => {
		render(<App />);
	});
});
