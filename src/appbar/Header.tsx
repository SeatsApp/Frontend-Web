import {Toolbar, Typography, AppBar, Box, Link} from "@mui/material";
import XploreLogo from "../assets/logo-color.png"
import {useState} from "react";
import RedirectButtons from "./RedirectButtons";

function Header() {
    const [activeBtn, setActiveBtn] = useState("Dashboard");

    return (
        <AppBar sx={{alignItems: 'center', background: '#fff'}}>
            <Toolbar sx={{width: '80%', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={XploreLogo} alt={"XploreLogo"}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <RedirectButtons activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
                    <Typography>|</Typography>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            localStorage.removeItem("JwtToken");
                            window.location.reload();
                        }}
                        color={'secondary'}
                        sx={activeBtn === "Logout" ? {
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            marginLeft: 2
                        } : {textDecoration: 'none', marginLeft: 2}}
                    >
                        Logout
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;


