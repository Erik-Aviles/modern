import { amber, grey, green, indigo } from "@mui/material/colors";

const validatedColor = (color) =>
  /^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null;

export default (server, darkMode) => ({
  mode: darkMode ? "dark" : "light",
  background: {
    default: darkMode ? grey[900] : grey[50],
  },
  primary: {
    main:
      validatedColor(server?.attributes?.colorPrimary) ||
      (darkMode ? "#f06292" : "#f50057"),
  },
  secondary: {
    main:
      validatedColor(server?.attributes?.colorSecondary) ||
      (darkMode ? green[200] : green[500]),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: green[800],
  },
  blue: {
    main: indigo[800],
  },
  medium: {
    main: amber[700],
  },
});
