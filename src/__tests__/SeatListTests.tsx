import React from "react";
import { SeatStatus } from "../shared/types/SeatStatus";
import TestRenderer from "react-test-renderer";
import SeatList from "../dashboard/components/SeatList";
import { render } from "@testing-library/react";
import AxiosClient from "../utils/AxiosClient";
import { AxiosPromise } from "axios";
import mocked = jest.mocked;
import useSeat from "../shared/hooks/useSeats";

test('renders learn react link', () => {
    const tree = TestRenderer.create(<SeatList seats={[{
        available: true,
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: [],
        xcoordinates: 0, ycoordinates: 0,
        width: 0, height: 0
    }]} filterByDate={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders learn react link', () => {
    const tree = TestRenderer.create(<SeatList seats={[{
        available: false,
        id: 1, name: "test", seatStatus: null,
        reservations: [],
        xcoordinates: 0, ycoordinates: 0,
        width: 0, height: 0
    }]} filterByDate={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders seat list', () => {
    const tree = TestRenderer.create(<SeatList seats={[]} filterByDate={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('button click', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [false, mockedSetState]).mockImplementation(() => [undefined, mockedSetState])

    const { getByText } = render(<SeatList seats={[{
        available: true,
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: [],
        xcoordinates: 0, ycoordinates: 0,
        width: 0, height: 0
    }]} filterByDate={() => null} />)

    getByText('Details').click();

    expect(mockedSetState).toHaveBeenCalledTimes(3);
});

jest.mock("../../src/utils/AxiosClient");
const { changeAvailability } = useSeat();

test("Change availability calls right api", async () => {
    // mock to resolve a Promise<void>
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    await changeAvailability(1);

    expect(AxiosClient).toHaveBeenCalledWith({
        method: "patch",
        url: '/api/seats/' + 1 + '/availability'
    });
});