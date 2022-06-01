import { fireEvent, render } from '@testing-library/react';
import AddFloorButton from '../../create_building/components/AddFloorButton';

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("click add floor", async () => {
    const mockedState = jest.fn();
    const view = render(<AddFloorButton building={{
        id: 0,
        name: '',
        floors: []
    }} setBuilding={mockedState}/>);

    fireEvent.click(view.getByText("Add floor"));

    expect(mockedState).toBeCalled()
});