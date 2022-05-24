import React from "react";
import {render, screen} from "@testing-library/react";
import DateFilter from "../dashboard/components/DateFilter";

test('filter by date with value not empty', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [null, () => null])
        .mockImplementationOnce(() => ["/api/seats", mockedSetState]);

    const mockElement = document.createElement("textarea");
    mockElement.setAttribute('value', '22/05/2022');
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<DateFilter apiString={"/api/seats"} setApiString={mockedSetState} refetchSeats={mockedSetState}/>)
    screen.getByText('Apply filter').click();

    expect(mockedSetState).toBeCalledWith(`/api/seats/reservations/date/2022-05-22`);
});

test('filter by date with value empty', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [null, mockedSetState])
        .mockImplementationOnce(() => ["/api/seats", mockedSetState])

    const mockElement = document.createElement("textarea");
    mockElement.setAttribute('value', '');
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(<DateFilter apiString={"/api/seats"} setApiString={mockedSetState} refetchSeats={mockedSetState}/>)
    screen.getByText('Apply filter').click();

    expect(mockedSetState).toHaveBeenCalledTimes(2);
    expect(mockedSetState).toBeCalledWith("/api/seats");
    expect(mockedSetState).toBeCalledWith("/api/seats");
});