import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#73A9C2'
    }
  },
  typography: {
    fontFamily: ['IBMBios'],
    fontSize: '1.5em'
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1.5em',
        textTransform: 'none'
      }
    },
    MuiTextField: {
      root: {
        backgroundColor: '#C4C4C4',
        maxWidth: '380px'
      }
    },
    MuiGrid: {
      root: {
        // border: '1px solid red'
      }
    }
  }
});
export default theme;
