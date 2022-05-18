import {Toolbar, Typography, AppBar, Box} from "@mui/material";
import CronosLogo from "../assets/cronosLogo.png"
import "../App.css"

function Header() {
    return (
        <AppBar className="App-header">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={CronosLogo} height={"80px"} alt={"Cronos"}/>
                    <Typography style={{marginLeft: 4}} variant={'h4'} >Dashboard</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;


