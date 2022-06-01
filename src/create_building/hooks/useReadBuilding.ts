import useGet from "../../shared/hooks/useGet";
import { Building } from "../../shared/types/Building";

export default function useReadBuilding(buildingId: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: building, refetch: refetchBuilding, loading } = useGet<Building>(
        `/api/buildings/${buildingId}`, {
        id: 0,
        name: "",
        floors: []
    });
    return {
        building,
        refetchBuilding,
        loading
    };
}