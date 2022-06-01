import useGet from "../../shared/hooks/useGet";
import { Building } from "../types/Building";

export default function useReadBuildings() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: buildings, refetch: refetchBuilding } = useGet<Building[]>("/api/buildings", []);
    return {
        buildings,
        refetchBuilding,
    };
}