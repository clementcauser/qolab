import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { deepPurple, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple.A200,
    },
    secondary: {
      main: pink.A400,
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
