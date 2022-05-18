import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../App';
import {BrowserRouter} from "react-router-dom";


test('renders learn react link', () => {
  const tree = TestRenderer.create(<BrowserRouter><App/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
