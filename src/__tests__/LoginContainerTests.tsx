import React from "react";
import renderer from "react-test-renderer";
import 'jest-localstorage-mock';
import {LoginContainer} from "../login/components/LoginContainer";
import {Typography} from "@mui/material";
import AxiosClient from "../utils/AxiosClient";
import useLogin from "../login/hooks/useLogin";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../utils/AxiosClient");
const mockedAxios = AxiosClient as jest.Mocked<typeof AxiosClient>

test("renders not logged in correctly", () => {
    const tree = renderer.create(<LoginContainer>
        <Typography>Test</Typography>
    </LoginContainer>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("get jwt token from url correctly", () => {
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [false, jest.fn()])

    // @ts-ignore
    delete window.location
    // @ts-ignore
    Object.defineProperty(window, 'location', {
        value: {
            href: "https://testurl?=#1234"
        }
    });

    mockedAxios.get.mockResolvedValue({
        status: 200
    });

    const tree = renderer.create(<LoginContainer>
        <Typography>Test</Typography>
    </LoginContainer>).toJSON();

    expect(tree).toMatchSnapshot();
    expect(localStorage.getItem("JwtToken")).toEqual("#123");
});

test("renders logged in correctly", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [true, setState])

    mockedAxios.get.mockResolvedValue({
        status: 200
    });

    const tree = renderer.create(<LoginContainer>
        <Typography>Test</Typography>
    </LoginContainer>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("should call api with correct parameters", async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [false, setState])

    const mockAxios = jest.spyOn(AxiosClient, 'get')
    mockAxios.mockImplementation(() => Promise.resolve({
        status: 200
    }));

    const { checkLoggedIn } = useLogin();

    await checkLoggedIn();

    expect(setState).toBeCalledWith(true);
});


test("should call api with wrong parameters", async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [false, setState])

    const mockAxios = jest.spyOn(AxiosClient, 'get')
    mockAxios.mockImplementation(() => Promise.resolve({
        status: 302
    }));

    const { checkLoggedIn } = useLogin();

    await checkLoggedIn();

    expect(setState).toBeCalledWith(false);
});

