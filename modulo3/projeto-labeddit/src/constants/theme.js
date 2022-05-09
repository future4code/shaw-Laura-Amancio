import { createTheme } from '@material-ui/core/styles';
import { PrimaryColor, NeutralColor, SecundaryColor, NeutralSecundaryColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: PrimaryColor,
      contrastText: "white",
    },
    secondary: {
      main: SecundaryColor,
      contrastText: NeutralSecundaryColor,
    },
  },
  text: {
    primary: NeutralColor
  }
});

export default theme;