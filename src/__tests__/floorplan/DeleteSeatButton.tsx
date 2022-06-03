import { fireEvent, render, } from "@testing-library/react";
import { AxiosPromise } from 'axios';
import DeleteSeatButton from '../../floorplan/components/DeleteSeatButton';
import AxiosClient from '../../utils/AxiosClient';
import mocked = jest.mocked

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("Try delete seat", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<DeleteSeatButton seatId={0} refetchBuilding={jest.fn()}  />);

    fireEvent.click(view.getByRole("button"));

    expect(AxiosClient).toBeCalledTimes(1)
});