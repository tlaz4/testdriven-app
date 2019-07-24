import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import UsersList from '../UsersList'

const users = [
	{
		'active': true,
		'email': 'tlaz4@test.com',
		'id': 1,
		'username': 'tlaz'
	},
	{
		'active': true,
		'email': 'tyler@test.com',
		'id': 2,
		'username': 'tyler'
	}
];

test('UsersList renders properly', () => {
	const wrapper = shallow(<UsersList users={users}/>);
	const element = wrapper.find('h4');
	expect(element.length).toBe(2);
	expect(element.get(0).props.children).toBe('tlaz')
});

test('UsersList renders a snapshot properly', () => {
	const tree = renderer.create(<UsersList users={users}/>).toJSON();
	expect(tree).toMatchSnapshot();
});