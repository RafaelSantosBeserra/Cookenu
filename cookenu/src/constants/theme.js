import { createTheme } from '@mui/material';
import { primaryColor, secundaryColor } from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secundaryColor,
    },
  },
});

export default theme;