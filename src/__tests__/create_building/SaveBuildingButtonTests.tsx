import { fireEvent, render } from '@testing-library/react';
import { AxiosPromise } from 'axios';
import toast from 'react-hot-toast';
import SaveBuildingButton from '../../create_building/components/SaveBuildingButton';
import AxiosClient from '../../utils/AxiosClient';
import mocked = jest.mocked;

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../utils/AxiosClient");

test("click save new building", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);
    const view = render(<SaveBuildingButton building={{
        id: 0,
        name: 'test',
        floors: [{
            id: 2,
            name: "test",
            seats: [],
            points: []
        }]
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(AxiosClient).toBeCalledWith({
        "data": "{\"id\":0,\"name\":\"test\",\"floors\":[{\"id\":2,\"name\":\"test\",\"seats\":[],\"points\":[]}]}",
        "headers": { "Content-Type": "application/json" },
        "method": "post",
        "url": "/api/buildings"
    })
});

test("click save new building without building name", async () => {
    const mockedToast = jest.fn()
    jest.spyOn(toast, "error").mockImplementation(mockedToast)

    const view = render(<SaveBuildingButton building={{
        id: 0,
        name: "",
        floors: []
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(mockedToast).toBeCalledTimes(1)
});

test("click save new building without floors", async () => {
    const mockedToast = jest.fn()
    jest.spyOn(toast, "error").mockImplementation(mockedToast)

    const view = render(<SaveBuildingButton building={{
        id: 0,
        name: 'test',
        floors: [{
            id: 0,
            name: "",
            seats: [],
            points: []
        }]
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(mockedToast).toBeCalledTimes(1)
});

test("click save new building without floor name", async () => {
    const mockedToast = jest.fn()
    jest.spyOn(toast, "error").mockImplementation(mockedToast)

    const view = render(<SaveBuildingButton building={{
        id: 0,
        name: 'test',
        floors: []
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(mockedToast).toBeCalledTimes(1)
});

test("click save existing building", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);
    const view = render(<SaveBuildingButton building={{
        id: 1,
        name: 'test',
        floors: [{
            id: 2,
            name: "test",
            seats: [],
            points: []
        }]
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(AxiosClient).toBeCalledWith({
        "data": "{\"id\":1,\"name\":\"test\",\"floors\":[{\"id\":2,\"name\":\"test\",\"seats\":[],\"points\":[]}]}",
        "headers": { "Content-Type": "application/json" },
        "method": "patch",
        "url": "/api/buildings/1"
    })
});