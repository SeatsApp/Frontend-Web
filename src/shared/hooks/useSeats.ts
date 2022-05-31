import axiosClient from '../../utils/AxiosClient';
import toast from 'react-hot-toast';
import useGetFilter from './useGetFilter';
import {Seat} from "../types/Seat";

export default function useSeat() {
    function readSeatsFilter(value: string) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: seats, refetch: refetchSeats } = useGetFilter<Seat[]>(value, []);
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

    return {
        readSeatsFilter,
        changeAvailability
    };
}
