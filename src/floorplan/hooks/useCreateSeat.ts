import AxiosClient from "../../utils/AxiosClient";
import toast from 'react-hot-toast';

export default function useCreateSeat(floorId: number, name: string,
    xCoordinates: number, yCoordinates: number, width: number, height: number) {
    return AxiosClient({
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