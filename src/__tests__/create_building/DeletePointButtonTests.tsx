import { fireEvent, render } from '@testing-library/react';
import DeletePointButton from '../../create_building/components/DeletePointButton';

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("click delete point", async () => {
    const mockedState = jest.fn();
    const view = render(<DeletePointButton building={{
        id: 0,
        name: '',
        floors: [{
            id: 5,
            name: "",
            seats: [],
            points: [{
                firstPoint: 5,
                secondPoint: 10
            },
            {
                firstPoint: 5,
                secondPoint: 10
            }]
        },
        {
            id: 5,
            name: "",
            seats: [],
            points: []
        }]
    }}
        setBuilding={mockedState}
        floorIndex={0}
        pointIndex={0} />);

    fireEvent.click(view.getByRole("button"));

    expect(mockedState).toBeCalled()
});