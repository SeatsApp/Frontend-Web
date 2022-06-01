import { fireEvent, render } from '@testing-library/react';
import FloorAccordion from '../../create_building/components/FloorAccordion';

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("change floor name", async () => {
    const mockedState = jest.fn();
    const view = render(<FloorAccordion
        floor={{
            id: 0,
            name: '',
            seats: [],
            points: []
        }}
        floorIndex={0}
        building={{
            id: 0,
            name: '',
            floors: [{
                id: 0,
                name: '',
                seats: [],
                points: []
            }]
        }} setBuilding={mockedState} />);

    fireEvent.change(view.getByLabelText("Floor name"), { target: { value: "5" } });

    expect(mockedState).toBeCalled()
});

test("change point", async () => {
    const mockedState = jest.fn();
    const view = render(<FloorAccordion
        floor={{
            id: 0,
            name: '',
            seats: [],
            points: [{
                firstPoint : 15,
                secondPoint: 8
            }]
        }}
        floorIndex={0}
        building={{
            id: 0,
            name: '',
            floors: [{
                id: 0,
                name: '',
                seats: [],
                points: [{
                    firstPoint : 15,
                    secondPoint: 8
                }]
            }]
        }} setBuilding={mockedState} />);

    fireEvent.change(view.getByLabelText("X,Y point 1"), { target: { value: "5,5" } });

    expect(mockedState).toBeCalled()
});