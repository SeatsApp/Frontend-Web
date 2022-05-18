import React from 'react';
import TestRenderer from 'react-test-renderer';
import Dashboard from "../dashboard/components/Dashboard";

test('renders dashboard', () => {
    const tree = TestRenderer.create(<Dashboard/>).toJSON();
    expect(tree).toMatchSnapshot();
});
