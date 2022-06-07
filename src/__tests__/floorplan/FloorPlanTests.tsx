import { Floorplan } from '../../floorplan/components/Floorplan';
import { fireEvent, render, } from "@testing-library/react";
import React from 'react';
import { SeatStatus } from '../../shared/types/SeatStatus';

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test("Try clear update seat", () => {
    const mockedChange = jest.fn().mockImplementation()

    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [0, jest.fn()])
        .mockImplementationOnce(() => [0, jest.fn()])
        .mockImplementationOnce(() => [0, jest.fn()])
        .mockImplementationOnce(() => [0, jest.fn()])
        .mockImplementationOnce(() => ["", jest.fn()])
        .mockImplementationOnce(() => [{
            id: 5,
            name: "",
            reservations: [],
            xcoordinates: 0,
            ycoordinates: 0,
            width: 0,
            height: 0,
            seatStatus: SeatStatus.AVAILABLE,
            available: true
        }, mockedChange])
        .mockImplementationOnce(() => [{
            buildingId: 12,
            buildingName: '',
            floorId: 15,
            floorName: '',
            floorPoints: [{
                firstPoint: 5,
                secondPoint: 8
            }],
            seats: []
        }, jest.fn()])
        .mockImplementationOnce(() => [false, jest.fn()])

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
        useParams: () => ({
            buildingId: "12",
            floorId: '15',
        }),
        useRouteMatch: () => ({ url: '/buildings/12/floors/15/floorplan' }),
    }));

    const view = render(<Floorplan />);

    fireEvent.click(view.getByText("Clear seat"));

    expect(mockedChange).toBeCalledTimes(1)
    expect(mockedChange).toBeCalledWith(undefined)
});
