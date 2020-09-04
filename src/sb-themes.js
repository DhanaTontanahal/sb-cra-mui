
import { createMuiTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
    typography:{
      fontFamily:'Arial',
      h1:{
        fontSize:'5rem'
      }
    }
  });

  export default theme;