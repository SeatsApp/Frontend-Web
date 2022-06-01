import React from 'react';
import { ManageBuildings } from "../../buildings/components/ManageBuildings";
import TestRenderer from 'react-test-renderer';

jest.mock("../../utils/AxiosClient");

test("renders correctly", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [[{
        id: 1,
        name: "Building 1",
        floors: [],
    }], setState])

    const tree = TestRenderer.create(
        <ManageBuildings />).toJSON();
    expect(tree).toMatchSnapshot();
});
