import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5D4FFF',
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
      fontWeight: "bold"
    }
  },
});

theme.typography.h2 = {
  fontWeight: 'bold',
  fontSize: '50px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '38px',
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
    fontSize: '12px',
  },
};

theme.typography.subtitle2 = {
  color: '#999999',
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '11px',
  },
};

export default theme;



// 50 - 100
// 38 - x


// x = (100*38)/50 = 0.76