import TestRenderer from 'react-test-renderer';
import { Floorplan } from '../../floorplan/components/Floorplan';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test("renders wrongly", () => {
    const tree = TestRenderer.create(<Floorplan />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
    const tree = TestRenderer.create(
        <MemoryRouter initialEntries={['/buildings/12/floors/15/floorplan']}>
            <Routes>
                <Route path='/buildings/:buildingId/floors/:floorId/floorplan' element={<Floorplan />} />
            </Routes>
        </MemoryRouter>
    ).toJSON
    expect(tree).toMatchSnapshot();
});