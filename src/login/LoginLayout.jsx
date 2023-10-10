import { useState } from "react";
import { useMediaQuery, Paper, CircularProgress } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useTheme } from "@mui/material/styles";
import LogoImage from "./LogoImage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  sidebar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    paddingBottom: theme.spacing(5),
    width: theme.dimensions.sidebarWidth,
    [theme.breakpoints.down("lg")]: {
      width: theme.dimensions.sidebarWidthTablet,
    },
    [theme.breakpoints.down("sm")]: {
      width: "0px",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    flex: 1,
    boxShadow: "-2px 0px 16px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 25, 0, 0),
    },
    backgroundImage: 'url("backgroundImage.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  form: {
    maxWidth: theme.spacing(52),
    padding: theme.spacing(5),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      width: "90%",
    },
    borderRadius: theme.spacing(1),
    boxShadow: "-2px 0px 16px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(245, 245, 245, 0.5)",
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [load, setLoad] = useState(false);

  setTimeout(() => {
    setLoad(true);
  }, 1000);

  return (
    <main className={classes.root}>
      <div className={classes.sidebar}>
        {!useMediaQuery(theme.breakpoints.down("lg")) && (
          <LogoImage color={theme.palette.secondary.contrastText} />
        )}
      </div>
      <Paper className={classes.paper}>
        {!load ? (
          <CircularProgress />
        ) : (
          <form className={classes.form}>{children}</form>
        )}
      </Paper>
    </main>
  );
};

export default LoginLayout;
