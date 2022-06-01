import '@testing-library/jest-dom'
import { fireEvent, render, } from "@testing-library/react";
import { AxiosPromise } from 'axios';
import CreateSeatButton from '../../floorplan/components/CreateSeatButton';
import AxiosClient from '../../utils/AxiosClient';
import mocked = jest.mocked

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("Try create wrong seat", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);
    
    const view = render(<CreateSeatButton floorId={0} name={''} xCoordinates={0} yCoordinates={0} width={0} height={0} />);

    fireEvent.click(await view.findByText("Save seat"));

    expect(AxiosClient).toBeCalledTimes(0)
});

test("Try create correct seat", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<CreateSeatButton floorId={0} name={'A'} xCoordinates={0} yCoordinates={0} width={15} height={15} />);

    fireEvent.click(await view.findByText("Save seat"));

    expect(AxiosClient).toBeCalledTimes(1)
});