import React from "react";
import {fireEvent, render, waitFor} from "@testing-library/react";
import Header from "../appbar/Header";
import {act} from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test('Click header button correctly', async () => {
    localStorage.setItem("JwtToken", "Test");

    const {getByText} = render(<BrowserRouter><Header/></BrowserRouter>);

    const element = getByText("Logout");

    await act(() => {
        fireEvent.click(element);
    });

    expect(localStorage.getItem('JwtToken')).toBeNull();
});

test("Test location is reloaded", async () => {
    // @ts-ignore
    delete window.location
    // @ts-ignore
    window.location = { reload: jest.fn() }

    const screen = render(<BrowserRouter><Header/></BrowserRouter>);

    fireEvent.click(screen.getByText("Logout"));

    await waitFor(() => {
        expect(window.location.reload).toBeCalled();
    })
});