import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import type {} from '@mui/x-data-grid/themeAugmentation';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    text:{
      primary: "#FFFFFF"
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '',
        },
      },
    },
  },

});

export default theme;