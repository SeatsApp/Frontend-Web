import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: '20px'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '20px'
                }
            }
        },
    }
});