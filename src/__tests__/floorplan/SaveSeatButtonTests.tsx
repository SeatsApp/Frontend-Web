import '@testing-library/jest-dom'
import { fireEvent, render, } from "@testing-library/react";
import { AxiosPromise } from 'axios';
import SaveSeatButton from '../../floorplan/components/SaveSeatButton';
import { SeatStatus } from '../../shared/types/SeatStatus';
import AxiosClient from '../../utils/AxiosClient';
import mocked = jest.mocked

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("Try create wrong seat", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<SaveSeatButton floorId={0} name={''} xCoordinates={0} yCoordinates={0} width={0} height={0}
    seat={undefined} refetchBuilding={jest.fn()} />);

    fireEvent.click(view.getByText("Save seat"));

    expect(AxiosClient).toBeCalledTimes(0)
});

test("Try create correct seat", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<SaveSeatButton floorId={0} name={'A'} xCoordinates={0} yCoordinates={0} width={15} height={15}
        seat={undefined}  refetchBuilding={jest.fn()} />);

    fireEvent.click(view.getByText("Save seat"));

    expect(AxiosClient).toBeCalledTimes(1)
});

test("Try update seat", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<SaveSeatButton floorId={0} name={'A'} xCoordinates={0} yCoordinates={0} width={15} height={15}
        seat={{
            id: 0,
            name: "",
            xcoordinates: 0,
            ycoordinates: 0,
            width: 0,
            height: 0,
            reservations: [],
            seatStatus: SeatStatus.AVAILABLE,
            available: true
        }}  refetchBuilding={jest.fn()} />);

    fireEvent.click(view.getByText("Save seat"));

    expect(AxiosClient).toBeCalledTimes(2)
});