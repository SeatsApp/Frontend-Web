import axiosClient from '../../utils/AxiosClient';
import toast from 'react-hot-toast';
import {Seat} from "../types/Seat";
import useGet from './useGet';

export default function useSeat() {
    function readSeatsFilter(value: string) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: seats, refetchFilter: refetchSeats } = useGet<Seat[]>(value, []);
        return {
            seats,
            refetchSeats,
        };
    }

    function changeAvailability(seatId: number) {
        return axiosClient({
            url: '/api/seats/' + seatId + '/availability', method: 'patch',
        }).then(() => {
            /* istanbul ignore next */
            toast.success("Successfully changed availability of the seat.");
        }).catch(() => {
            /* istanbul ignore next */
            toast.error("Could not change availability of the seat.")
        })
    }

    function deleteSeat(seatId: number) {
        return axiosClient({
            url: '/api/seats/' + seatId, method: 'delete',
        }).then(() => {
            /* istanbul ignore next */
            toast.success("Successfully deleted the seat.");
        }).catch(() => {
            /* istanbul ignore next */
            toast.error("Could not delete the seat.")
        })
    }

    function updateSeat(seatId: number, seat: Seat) {
        return axiosClient({
            url: '/api/seats/' + seatId, method: 'patch',
            data: JSON.stringify(seat),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => {
            /* istanbul ignore next */
            toast.success("Successfully updated the seat.");
        }).catch(() => {
            /* istanbul ignore next */
            toast.error("Could not update the seat.")
        })
    }

    function createSeat(floorId: number, name: string,
        xCoordinates: number, yCoordinates: number, width: number, height: number) {
        return axiosClient({
            url: '/api/seats/', method: 'post'
            ,
            data: JSON.stringify({
                floorId: floorId,
                name: name,
                xcoordinates: xCoordinates,
                ycoordinates: yCoordinates,
                width: width,
                height: height
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => {
            /* istanbul ignore next */
            toast.success("Successfully created the seat.");
        }).catch(() => {
            /* istanbul ignore next */
            toast.error("Could not create the seat.")
        })
    }

    return {
        readSeatsFilter,
        changeAvailability,
        deleteSeat,
        createSeat,
        updateSeat
    };
}
