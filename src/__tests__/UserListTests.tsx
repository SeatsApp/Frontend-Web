import TestRenderer from "react-test-renderer";
import React from "react";
import UserList from "../userboard/components/UserList";

test('renders learn react link', () => {
    const tree = TestRenderer.create(<UserList  changeRole={() => null} users={[{fullName: 'test', role: "ADMIN", email: 'Test'}]}/>).toJSON();
    expect(tree).toMatchSnapshot();
});