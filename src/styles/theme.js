import { red, lightGreen } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary:{
            main: '#3c6e71',
        },
        secondary:{
            main: '#d9d9d9',
        },
        error:{
            main: red[100],
        },
        warning:{
            main: red[200],
        },
        info:{
            main: '#284b63',
        },
        success:{
            main: lightGreen[100],
        }
    }
})

export default theme;