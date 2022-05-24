import React from "react";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom'
import {OpenURLButton} from "../login/components/OpenUrlButton";
import {fireEvent, render, waitFor} from "@testing-library/react";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test("renders correctly", () => {
    const tree = renderer.create(<OpenURLButton url={""} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Test web button press", async () => {
    // @ts-ignore
    delete window.location
    // @ts-ignore
    window.location = { assign: jest.fn() }

    const screen = render(<OpenURLButton url="https://google.be" />);

    fireEvent.click(screen.getByText("Connect with your Cronos account."));

    await waitFor(() => {
        expect(window.location.assign).toBeCalled();
    })
});