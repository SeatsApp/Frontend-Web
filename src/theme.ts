import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background: {
            default: "#f7f7f7"
        },
        primary: {
            main: "#525464",
            contrastText: '#525464',
        },
        secondary: {
            main: "#28303d",
            light: "#fff",
            contrastText: '#fff',
        },
        error: {
            main: "#e04457"
        },
        warning: {
            main: "#ffc81f"
        }
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: '17px'
                }
            }
        },
        MuiLink: {
          styleOverrides: {
              root: {
                  fontSize: '20px'
              }
          }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: () => ({
                    '&.MuiButton-outlinedSecondary:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: "#fff"
                    },
                })
            }
        }
    },
});