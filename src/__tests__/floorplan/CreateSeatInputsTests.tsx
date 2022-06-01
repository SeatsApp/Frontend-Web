import '@testing-library/jest-dom'
import { fireEvent, render, } from "@testing-library/react";
import CreateSeatInputs from "../../floorplan/components/CreateSeatInputs";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test("change textfield name", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs setName={() => mockedChange()}
        setXCoordinates={jest.fn()}
        setYCoordinates={jest.fn()} setWidth={jest.fn()}
        setHeight={jest.fn()} />);

    fireEvent.change(view.getByLabelText("Name"), { target: { value: 'a' } });

    expect(mockedChange).toBeCalled()
});

test("change textfield x coordinates", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs setName={jest.fn()}
        setXCoordinates={() => mockedChange()}
        setYCoordinates={jest.fn()} setWidth={jest.fn()}
        setHeight={jest.fn()} />);

    fireEvent.change(view.getByLabelText("X coordinates"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});

test("change textfield y coordinates", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs setName={jest.fn()}
        setXCoordinates={jest.fn()}
        setYCoordinates={() => mockedChange()} setWidth={jest.fn()}
        setHeight={jest.fn()} />);

    fireEvent.change(view.getByLabelText("Y coordinates"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});

test("change textfield width", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs setName={jest.fn()}
        setXCoordinates={jest.fn()}
        setYCoordinates={jest.fn()} setWidth={() => mockedChange()}
        setHeight={jest.fn()} />);

    fireEvent.change(view.getByLabelText("Width"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});

test("change textfield height", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs setName={jest.fn()}
        setXCoordinates={jest.fn()}
        setYCoordinates={jest.fn()} setWidth={jest.fn()}
        setHeight={() => mockedChange()} />);

    fireEvent.change(view.getByLabelText("Height"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});