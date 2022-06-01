import { fireEvent, render } from '@testing-library/react';
import { AxiosPromise } from 'axios';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TestRenderer, { act } from 'react-test-renderer';
import { CreateBuilding } from '../../create_building/components/CreateBuilding';
import AxiosClient from '../../utils/AxiosClient';
import mocked = jest.mocked;

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("renders correctly", () => {
    const tree = TestRenderer.create(
        <MemoryRouter initialEntries={['/buildings/12']}>
            <Routes>
                <Route path='/buildings/:buildingId' element={<CreateBuilding />} />
            </Routes>
        </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("change building name", async () => {
    const building = {
        id: 12,
        name: "Test",
        floors: [{
            id: 5,
            name: "Floor 5",
            seats: [],
            points: []
        }]
    }
    mocked(AxiosClient).mockResolvedValue(Promise.resolve(building) as unknown as AxiosPromise<void>);
    const view = render(<MemoryRouter initialEntries={['/buildings/12']}>
        <Routes>
            <Route path='/buildings/:buildingId' element={<CreateBuilding />} />
        </Routes>
    </MemoryRouter>);

    act(() => {
        fireEvent.change(view.getByLabelText("Building name"), { target: { value: 5 } });
    })

    expect(AxiosClient).toHaveBeenCalledWith("/api/buildings/12");
});
