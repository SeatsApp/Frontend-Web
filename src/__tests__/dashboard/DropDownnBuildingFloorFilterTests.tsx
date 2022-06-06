import { fireEvent, render, within } from "@testing-library/react";
import { AxiosPromise } from "axios";
import React from "react";
import DropDownBuildingFloorFilter from "../../dashboard/components/DropDownBuildingFloorFilter";
import { Building } from "../../shared/types/Building";
import AxiosClient from "../../utils/AxiosClient";
import mocked = jest.mocked

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

jest.mock("../../../src/utils/AxiosClient");

test('change building', () => {
    const mockedBuildingId = jest.fn();
    const mockedFloorId = jest.fn();

    const buildings: Building[] = [{
        id: 5,
        name: "test",
        floors: [{
            id: 4,
            name: "Floor 4",
            seats: [],
            points: []
        }]
    }]

    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [buildings, jest.fn()])
        .mockImplementationOnce(() => [false, jest.fn()])
        .mockImplementationOnce(() => [undefined, jest.fn()])


    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<DropDownBuildingFloorFilter buildingId={0} floorId={0}
        setBuildingId={mockedBuildingId} setFloorId={mockedFloorId} />)

    fireEvent.mouseDown(view.getByRole('button'));

    const listbox = within(view.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/test/i));

    expect(mockedBuildingId).toHaveBeenCalledTimes(1);
    expect(mockedFloorId).toHaveBeenCalledTimes(1);
});


test('change building to everything', () => {
    const buildings: Building[] = [{
        id: 5,
        name: "test",
        floors: [{
            id: 4,
            name: "Floor 4",
            seats: [],
            points: []
        }]
    }]

    const mockedBuildingId = jest.fn();
    const mockedFloorId = jest.fn();

    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [buildings, jest.fn()])
        .mockImplementationOnce(() => [false, jest.fn()])
        .mockImplementationOnce(() => [undefined, jest.fn()])

    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<DropDownBuildingFloorFilter buildingId={5} floorId={4}
        setBuildingId={mockedBuildingId} setFloorId={mockedFloorId} />)

    fireEvent.mouseDown(view.getByRole('button'));

    const listbox = within(view.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Everything/i));

    expect(mockedBuildingId).toHaveBeenCalledTimes(1);
});


test('change floor to', () => {
    const mockedBuildingId = jest.fn();
    const mockedFloorId = jest.fn();

    const buildings: Building[] = [{
        id: 5,
        name: "test",
        floors: [{
            id: 4,
            name: "Floor 4",
            seats: [],
            points: []
        },
        {
            id: 8,
            name: "Floor 8",
            seats: [],
            points: []
        }]
    }]

    const building: Building = {
        id: 5,
        name: "",
        floors: [{
            id: 4,
            name: "Floor 4",
            seats: [],
            points: []
        },
        {
            id: 8,
            name: "Floor 8",
            seats: [],
            points: []
        }]
    }

    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [buildings, jest.fn()])
        .mockImplementationOnce(() => [false, jest.fn()])
        .mockImplementationOnce(() => [building, jest.fn()])


    mocked(AxiosClient).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

    const view = render(<DropDownBuildingFloorFilter buildingId={5} floorId={4}
        setBuildingId={mockedBuildingId} setFloorId={mockedFloorId} />)

    fireEvent.mouseDown(view.getAllByRole('button')[1]);

    const listbox = within(view.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/Floor 8/i));

    expect(mockedFloorId).toHaveBeenCalledTimes(1);
});