import React from "react";
import UserBoard from "../userboard/components/UserBoard";
import TestRenderer from "react-test-renderer";

test('renders learn react link', () => {
    const tree = TestRenderer.create(<UserBoard />).toJSON();
    expect(tree).toMatchSnapshot();
});
