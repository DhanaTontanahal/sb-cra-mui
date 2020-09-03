
import { createMuiTheme } from '@material-ui/core/styles';
import { green, purple, blue, lightBlue,red,blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      default:blueGrey[900],
    },
    typography:{
      fontFamily:'Arial',
      "h4":{
        fontWeight:'bold',
        color:'black',
        fontSize:'12'
      }
    }
  });

  export default theme;