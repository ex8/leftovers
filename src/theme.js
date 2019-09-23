import { createMuiTheme } from '@material-ui/core/styles';
import { red, indigo } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: {
      // main: '#87103f',
      main: red[900],
    },
    secondary: {
      // main: '#7c88cc',
      main: indigo[300],
    },
    // type: "dark",
  },
});
