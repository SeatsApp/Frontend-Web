import React from 'react';
import {render} from "@testing-library/react";
import CheckedInSeats from "../dashboard/components/overallinfo/CheckedInSeats";
import FreeSeats from "../dashboard/components/overallinfo/FreeSeats";
import TotalReservations from "../dashboard/components/overallinfo/TotalReservations"
import {SeatStatus} from "../shared/types/SeatStatus";


test('checked in seats useEffect test with seats', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => ["--", mockedSetState]);

    render(<CheckedInSeats seats={[{
        available: true,
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: [{ id: 1, startDateTime: "2022-04-22 15:00:00", endDateTime: "2022-04-22 16:00:00", checkedIn: true, user: {email: 'test', fullName: 'test', role: 'ADMIN'} }]
    }]} />);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(mockedSetState).toBeCalledWith("1");
});

test('checked in seats useEffect test without seats', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => ["--", mockedSetState]);

    render(<CheckedInSeats seats={[]} />);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(mockedSetState).toBeCalledWith("--");
});

test('free seats useEffect test with seats', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => ["--", mockedSetState]);

    render(<FreeSeats seats={[{
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: [] , available: true
    }]} />);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(mockedSetState).toBeCalledWith("1");
});

test('free seats useEffect test without seats', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => ["--", mockedSetState]);

    render(<FreeSeats seats={[]} />);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(mockedSetState).toBeCalledWith("--");
});

test('totalRes useEffect test with seats and reservations', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => ["--", mockedSetState]);

    render(<TotalReservations seats={[{
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: [{ id: 1, startDateTime: "2022-04-22 15:00:00", endDateTime: "2022-04-22 16:00:00", checkedIn: true, user: {email: 'test', fullName: 'test', role: 'ADMIN'} }] , available: true
    }]} />);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(mockedSetState).toBeCalledWith(1);
});

test('totalRes seats useEffect test without seats', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [0, mockedSetState]);

    render(<TotalReservations seats={[]} />);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(mockedSetState).toBeCalledWith(0);
});
