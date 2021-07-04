import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    MuiPaper: {
      square: true
    },
    MuiButtonBase: {
      disableRipple: true
    }
  },
  palette: {
    primary: {
      main: '#73A9C2'
    },
    secondary: {
      main: '#25874C'
    },
    error: {
      main: '#B35454'
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
        textTransform: 'none',
        color: '#FFFFFF',
        padding: 0
      },
      text: {
        padding: 0
      }
    },
    MuiTextField: {
      root: {
        backgroundColor: '#FFFFFF'
      }
    },
    MuiGrid: {
      root: {
        // border: '1px solid red',
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#C4C4C4',
        border: 'none'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'none'
      }
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: '#4C5676',
        color: '#FFFFFF',
        textAlign: 'center'
      }
    },
    MuiDialogContent: {
      root: {
        padding: '8px 24px',
        marginBottom: 20,
        overflowY: 'hidden'
      }
    },
    MuiDialogActions: {
      root: {
        padding: '8px 24px'
      }
    }
  }
});
export default theme;
