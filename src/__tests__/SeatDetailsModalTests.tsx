import React from "react";
import {render} from "@testing-library/react";
import SeatDetailsModal from "../dashboard/components/SeatDetailsModal";
import {SeatStatus} from "../dashboard/types/SeatStatus";

test('getEvents', () => {
    const setOpenMocked = jest.fn();
    const mockedSetState = jest.fn();
    jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => [[], mockedSetState]);

    const { getByRole } = render(<SeatDetailsModal  open={true}  seat={{
        id: 1, name: "test", seatStatus: SeatStatus.AVAILABLE,
        reservations: [{ id: 1, startDateTime: "2022-04-22 15:00:00", endDateTime: "2022-04-22 16:00:00", checkedIn: false, user: {email: 'test', fullName: 'test'} }]
    }} setOpen={setOpenMocked}/>)

    getByRole('button').click();

    expect(mockedSetState).toHaveBeenCalledTimes(1);
    expect(setOpenMocked).toBeCalledWith(false);
    expect(mockedSetState).toBeCalledWith([{"end": "2022-04-22 16:00:00", "id": 1, "start": "2022-04-22 15:00:00", "text": "test"}]);
});