import axiosClient from '../../utils/AxiosClient';
import useGetFilter from './useGetFilter';
import {Seat} from "../types/Seat";
import { toast } from 'react-toastify';

export default function useSeat() {
    async function createSeat(
        name: string
    ) {
        return axiosClient({
            url: '/api/seats', method: 'post',
            data: JSON.stringify({ name: name }), headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            toast.success("Seat.ts with name \"" + name
                + "\" is successfully created.")
        })
            .catch(() => {
                /* istanbul ignore next */
                toast.error("Could not create a seat with name \"" + name + "\".")
            })
    }

    async function deleteSeat(seatId: number) {
        return axiosClient({
            url: '/api/seats/' + seatId, method: 'delete',
        }).then(() => {
            toast.success("Successfully deleted the seat.")
        }).catch(() => {
            /* istanbul ignore next */
            toast.error("Could not delete the seat.")
        })
    }

    function readSeatsFilter(value: string) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: seats, refetch: refetchSeats } = useGetFilter<Seat[]>(value, []);
        return {
            seats,
            refetchSeats,
        };
    }

    return {
        createSeat,
        deleteSeat,
        readSeatsFilter
    };
}
