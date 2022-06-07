import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, IconButton, Typography,
} from "@mui/material";
import {Building} from "../../shared/types/Building";
import {Floor} from "../../shared/types/Floor";
import FloorCard from "./FloorCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useNavigate} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

interface BuildingBoxProps {
    building: Building
}

export default function BuildingBox({building}: BuildingBoxProps) {
    const navigate = useNavigate();

    return (
        <Box style={{padding: 10, margin: 10}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography variant='h4'>{building.name}</Typography>
                        <IconButton color={'secondary'} onClick={() => navigate("/buildings/" + building.id)}>
                            <EditIcon/>
                        </IconButton>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='h5'>Floors:</Typography>
                    {building.floors.map((floor: Floor) =>
                        <FloorCard key={floor.id} buildingId={building.id} floor={floor}/>)}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}