import React from "react";
import {render, screen} from "@testing-library/react";
import DateFilter from "../dashboard/components/DateFilter";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test('filter by date with value not empty', () => {
    const mockedSetState = jest.fn();

    render(<DateFilter filterByDate={mockedSetState} setStartDate={mockedSetState} startDate={null}/>)
    screen.getByText('Apply filter').click();

    expect(mockedSetState).toBeCalledTimes(1);
});