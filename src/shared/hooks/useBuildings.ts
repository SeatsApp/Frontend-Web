import useGet from "./useGet";
import { SelectedBuilding } from "../types/SelectedBuilding";
import { Building } from "../types/Building";

export default function useBuildings() {
    function readAllBuildings() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: buildings, refetch: refetchBuilding, loading } = useGet<Building[]>(
            `/api/buildings`, []);
        return {
            buildings,
            refetchBuilding,
            loading
        };
    }

    function readSelectedBuilding(buildingId: number, floorId: number, retrieveImmediately: boolean = true) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data: selectedBuilding, refetch, refetchFilter: refetchFilterBuilding, loading } = useGet<SelectedBuilding>(
            `/api/buildings/${buildingId}/floors/${floorId}`, {
            buildingId: 0,
            buildingName: "",
            floorId: 0,
            floorName: "",
            floorPoints: [],
            seats: []
        }, retrieveImmediately);

        function refetchDefaultBuilding() {
            refetch()
        }

        function refetchBuilding(buildingIdRefetch: number, floorIdRefetch: number) {
            refetchFilterBuilding(`/api/buildings/${buildingIdRefetch}/floors/${floorIdRefetch}`)
        }

        function refetchBuildingByDate(buildingIdRefetchDate: number, floorIdRefetchDate: number, date: string) {
            refetchFilterBuilding(`/api/buildings/${buildingIdRefetchDate}/floors/${floorIdRefetchDate}?date=${date}`)
        }

        return {
            selectedBuilding,
            refetchDefaultBuilding,
            refetchBuilding,
            refetchBuildingByDate,
            loading
        };
    }

    return {
        readAllBuildings,
        readSelectedBuilding,
    }
}