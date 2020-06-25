import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import { shallow, render } from 'enzyme';

import App from './App';

describe('<App />', () => {
	it('should render app', () => {
		const wrapper = shallow(<App />);
		render(<App />);
	});

	it('should find a <div> tag and <code> tag', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('div').length).toBe(2);
		expect(wrapper.find('code').length).toBe(1);
	});
});
