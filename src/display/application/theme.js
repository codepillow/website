import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5D4FFF',
      transparent: {
        light: "rgba(150, 141, 255, 0.2)",
        dark: "rgba(150, 141, 255, 0.3)"
      },
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: "5px"
  },
  typography: {
    fontFamily: ["Quicksand"].join(','),
    button: {
      textTransform: "none",
      fontWeight: "bold",
    }
  },
  overrides: {
    MuiButton: {
      // Name of the rule
      root: {
        minWidth: 160,
        minHeight: 45,
      }
    },
  }
});

theme.typography.h2 = {
  fontWeight: 'bold',
  fontSize: '60px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '44px',
  },
};

theme.typography.h3 = {
  fontWeight: 'bold',
  fontSize: '34px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '27px',
  },
};

theme.typography.h5 = {
  fontWeight: 'bold',
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
};

theme.typography.subtitle1 = {
  color: '#999999',
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
};

theme.typography.subtitle2 = {
  color: '#999999',
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
};

export default theme;



// 50 - 100
// 38 - x


// x = (100*38)/50 = 0.76