import TestRenderer from 'react-test-renderer';
import BuildingFloorPlan from '../../shared/components/BuildingFloorPlan';
import { SeatStatus } from '../../shared/types/SeatStatus';

test("renders correctly", () => {
    const tree = TestRenderer.create(<BuildingFloorPlan seats={[{
        id: 0,
        name: '',
        seatStatus: SeatStatus.AVAILABLE,
        xcoordinates: 0,
        ycoordinates: 0,
        width: 0,
        height: 0,
        reservations: [],
        available: true
    }, {
        id: 1,
        name: '',
        seatStatus: SeatStatus.AVAILABLE,
        xcoordinates: 0,
        ycoordinates: 0,
        width: 0,
        height: 0,
        reservations: [],
        available: true
    }]}
        floorPoints={[{ firstPoint: 15, secondPoint: 15 }]} newSeat={{
            id: 0,
            name: '',
            seatStatus: SeatStatus.AVAILABLE,
            xcoordinates: 0,
            ycoordinates: 0,
            width: 0,
            height: 0,
            reservations: [],
            available: true
        }} />).toJSON
    expect(tree).toMatchSnapshot();
});