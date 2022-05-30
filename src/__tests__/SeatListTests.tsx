import React from "react";
import {SeatStatus} from "../shared/types/SeatStatus";
import TestRenderer from "react-test-renderer";
import SeatList from "../dashboard/components/SeatList";
import {render} from "@testing-library/react";

test('renders learn react link', () => {
    const tree = TestRenderer.create(<SeatList seats={[{
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: []
    }]} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders learn react link', () => {
    const tree = TestRenderer.create(<SeatList seats={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('button click', () => {
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [false, mockedSetState]).mockImplementation(() => [undefined, mockedSetState])

    const { getByText } = render(<SeatList seats={[{
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: []
    }]} />)

    getByText('Details').click();

    expect(mockedSetState).toHaveBeenCalledTimes(3);
});