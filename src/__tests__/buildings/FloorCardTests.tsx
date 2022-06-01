import TestRenderer from 'react-test-renderer';
import FloorCard from '../../buildings/components/FloorCard';
import { BrowserRouter } from 'react-router-dom';

test("renders correctly", () => {
    const tree = TestRenderer.create(
        <BrowserRouter>        <FloorCard buildingId={0} floor={{
            id: 1,
            name: 'Floor 1',
            seats: [],
            points: []
        }} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});