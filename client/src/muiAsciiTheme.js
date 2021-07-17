import { createTheme } from '@material-ui/core';

export const themeVariables = {
  props: {
    MuiPaper: {
      square: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: '#73A9C2',
    },
    secondary: {
      main: '#25874C',
    },
    error: {
      main: '#B35454',
    },
    gray: {
      dark: '#575555',
      light: '#C4C4C4',
    },
    blue: {
      header: '#4C5676',
    },
  },
  typography: {
    fontFamily: ['IBMBios'],
    fontSize: '1.5em',
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1.5em',
        textTransform: 'none',
        color: '#FFFFFF',
        padding: 0,
      },
      text: {
        padding: 0,
      },
    },
    MuiInputBase: {
      input: {
        padding: 6,
      },
    },
    MuiTextField: {
      root: {
        backgroundColor: '#FFFFFF',
      },
    },
    MuiGrid: {
      root: {
        // border: '1px solid red',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#C4C4C4',
        color: 'inherit',
        border: 'none',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'none',
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: '#4C5676',
        color: '#FFFFFF',
        textAlign: 'center',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '8px 24px',
        marginBottom: 20,
        overflowY: 'hidden',
        color: 'black',
      },
    },
    MuiDialogActions: {
      root: {
        padding: '8px 24px',
      },
    },
  },
};

export default createTheme(themeVariables);
