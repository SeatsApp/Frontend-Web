import { ManageBuildings } from "../../buildings/components/ManageBuildings";
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

jest.mock("../../utils/AxiosClient");

test("renders correctly", () => {
    const tree = TestRenderer.create(
        <BrowserRouter>
            <ManageBuildings />
        </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});
