import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../App';

test('renders learn react link', () => {
  const tree = TestRenderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
