import { fireEvent, render } from '@testing-library/react';
import AddPointButton from '../../create_building/components/AddPointButtons';

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("click add point", async () => {
    const mockedState = jest.fn();
    const view = render(<AddPointButton building={{
        id: 0,
        name: '',
        floors: [{
            id: 5,
            name: "",
            points: [],
            seats: []
        }]
    }} setBuilding={mockedState}
        floorIndex={0} />);

    fireEvent.click(view.getByText("Add point"));

    expect(mockedState).toBeCalled()
});