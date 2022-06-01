import AxiosClient from "../../utils/AxiosClient";
import toast from 'react-hot-toast';
import { Building } from "../../shared/types/Building";

export default function useUpdateBuilding(building:Building) {
    return AxiosClient({
        url: `/api/buildings/${building.id}`, method: 'patch'
        ,
        data: JSON.stringify(building),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(() => {
        /* istanbul ignore next */
        toast.success("Successfully updated the building.");
    }).catch(() => {
        /* istanbul ignore next */
        toast.error("Could not updated the building.")
    })
}