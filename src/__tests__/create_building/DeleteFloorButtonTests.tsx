import { fireEvent, render } from '@testing-library/react';
import DeleteFloorButton from '../../create_building/components/DeleteFloorButton';

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("click delete floor", async () => {
    const mockedState = jest.fn();
    const view = render(<DeleteFloorButton building={{
        id: 0,
        name: '',
        floors: [{
            id: 5,
            name: "",
            seats: [],
            points: []
        },
        {
            id: 5,
            name: "",
            seats: [],
            points: []
        }]
    }}
        setBuilding={mockedState}
        floorIndex={0} />);

    fireEvent.click(view.getByRole("button"));

    expect(mockedState).toBeCalled()
});