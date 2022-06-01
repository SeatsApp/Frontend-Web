import AxiosClient from "../../utils/AxiosClient";
import toast from 'react-hot-toast';
import { Building } from "../../shared/types/Building";

export default function useCreateBuilding(building:Building) {
    return AxiosClient({
        url: '/api/buildings', method: 'post'
        ,
        data: JSON.stringify(building),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(() => {
        /* istanbul ignore next */
        toast.success("Successfully created the building.");
    }).catch(() => {
        /* istanbul ignore next */
        toast.error("Could not create the building.")
    })
}