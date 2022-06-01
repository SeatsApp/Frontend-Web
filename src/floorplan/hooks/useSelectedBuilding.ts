import useGet from "../../shared/hooks/useGet";
import { SelectedBuilding } from "../types/SelectedBuilding";

export default function useSelectedBuilding(buildingId: string, floorId: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: building, refetch: refetchBuilding } = useGet<SelectedBuilding>(
        `/api/buildings/${buildingId}/floors/${floorId}`, {
        buildingId: 0,
        buildingName: "",
        floorId: 0,
        floorName: "",
        floorPoints: [],
        seats: []
    });
    return {
        building,
        refetchBuilding,
    };
}