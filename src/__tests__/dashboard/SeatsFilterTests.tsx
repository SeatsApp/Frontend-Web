import React from "react";
import {render, screen} from "@testing-library/react";
import SeatsFilter from "../../dashboard/components/SeatsFilter";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test('filter by date with value not empty', () => {
    const mockedSetState = jest.fn();

    render(<SeatsFilter filterSeats={mockedSetState} setStartDate={mockedSetState} startDate={null} 
        buildingId={0} floorId={0} setBuildingId={jest.fn()} setFloorId={jest.fn()}/>)
    screen.getByText('Apply filter').click();

    expect(mockedSetState).toBeCalledTimes(1);
});