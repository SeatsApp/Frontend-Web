import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import BuildingBox from '../../buildings/components/BuildingBox';

test("renders correctly", () => {
    const tree = TestRenderer.create(
        <BrowserRouter>
            <BuildingBox building={{
                id: 0,
                name: '',
                floors: [{
                    id: 5,
                    name: "",
                    points: [],
                    seats: []
                }]
            }} />
        </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});