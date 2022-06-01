import { fireEvent, render } from '@testing-library/react';
import { AxiosPromise } from 'axios';
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
        name: '',
        floors: []
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(AxiosClient).toBeCalledWith({
        "data": "{\"id\":0,\"name\":\"\",\"floors\":[]}",
        "headers": { "Content-Type": "application/json" },
        "method": "post",
        "url": "/api/buildings"
    })
});

test("click save existing building", async () => {
    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);
    const view = render(<SaveBuildingButton building={{
        id: 1,
        name: '',
        floors: []
    }} />);

    fireEvent.click(view.getByText("Save Building"));

    expect(AxiosClient).toBeCalledWith({
        "data": "{\"id\":1,\"name\":\"\",\"floors\":[]}",
        "headers": { "Content-Type": "application/json" },
        "method": "patch",
        "url": "/api/buildings/1"
    })
});