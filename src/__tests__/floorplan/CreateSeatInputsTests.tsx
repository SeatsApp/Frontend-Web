import '@testing-library/jest-dom'
import { fireEvent, render, } from "@testing-library/react";
import CreateSeatInputs from "../../floorplan/components/CreateSeatInputs";

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation();
    jest.spyOn(console, 'error').mockImplementation();
});

test("change textfield x coordinates", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs
    setXCoordinates={() => mockedChange()}
    setYCoordinates={jest.fn()} setWidth={jest.fn()}
    setHeight={jest.fn()} xCoordinates={0} yCoordinates={0} width={0} height={0} />);

    fireEvent.change(view.getByLabelText("X coordinates"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});

test("change textfield y coordinates", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs
    setXCoordinates={jest.fn()}
    setYCoordinates={() => mockedChange()} setWidth={jest.fn()}
    setHeight={jest.fn()} xCoordinates={0} yCoordinates={0} width={0} height={0} />);

    fireEvent.change(view.getByLabelText("Y coordinates"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});

test("change textfield width", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs
    setXCoordinates={jest.fn()}
    setYCoordinates={jest.fn()} setWidth={() => mockedChange()}
    setHeight={jest.fn()} xCoordinates={0} yCoordinates={0} width={0} height={0} />);

    fireEvent.change(view.getByLabelText("Width"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});

test("change textfield height", async () => {
    const mockedChange = jest.fn().mockImplementation()
    const view = render(<CreateSeatInputs
    setXCoordinates={jest.fn()}
    setYCoordinates={jest.fn()} setWidth={jest.fn()}
    setHeight={() => mockedChange()} xCoordinates={0} yCoordinates={0} width={0} height={0} />);

    fireEvent.change(view.getByLabelText("Height"), { target: { value: 5 } });

    expect(mockedChange).toBeCalled()
});