import React from 'react';
import TestRenderer, {act} from 'react-test-renderer';
import Dashboard from "../dashboard/components/Dashboard";
import AxiosClient from "../utils/AxiosClient";
import {fireEvent, render} from "@testing-library/react";
import mocked = jest.mocked;
import {AxiosPromise} from "axios";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test('renders dashboard', () => {
    const tree = TestRenderer.create(<Dashboard/>).toJSON();
    expect(tree).toMatchSnapshot();
});

jest.mock("../../src/utils/AxiosClient");

test('click calls function with right date', async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const mockElement = document.createElement("textarea");
    mockElement.setAttribute('value', '22/05/2022');
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    const {getByText} = render(<Dashboard/>);

    const element = getByText("Apply filter");

    await act(() => {
        fireEvent.click(element);
    });

    expect(AxiosClient).toHaveBeenCalledWith("/api/seats");

    expect(AxiosClient).toHaveBeenCalledWith("/api/seats/reservations/date/2022-05-22");

    mockElement.setAttribute('value', '');

    await act(() => {
        fireEvent.click(element);
    });

    expect(AxiosClient).toHaveBeenCalledWith("/api/seats");
});