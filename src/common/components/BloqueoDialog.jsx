import React from "react";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useTranslation } from "./LocalizationProvider";
import { useCatch } from "../../reactHelper";
import { snackBarDurationLongMs } from "../util/duration";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      bottom: `calc(${theme.dimensions.bottomBarHeight}px + ${theme.spacing(
        1
      )})`,
    },
  },
  button: {
    height: "auto",
    marginTop: 0,
    marginBottom: 0,
    color: theme.palette.error.main,
    background: "#fafafa",
  },
}));

const BloqueoDialog = ({ open, itemId, onResult, setBlocked }) => {
  const classes = useStyles();
  const t = useTranslation();

  const handleSendBloqueo = useCatch(async () => {
    const command = { type: "engineStop", deviceId: itemId };

    const response = await fetch("/api/commands/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(command),
    });
    if (response.ok) {
      onResult(true);
      setBlocked(true);
      // console.log('Bloqueado exitosamente');
    } else {
      // console.log('Sigue intentando');
      throw Error(await response.text());
    }
  });

  return (
    <Snackbar
      className={classes.root}
      open={open}
      autoHideDuration={snackBarDurationLongMs}
      onClose={() => onResult(false)}
      message={t("sharedBloqueoConfirm")}
      action={
        <Button
          size="small"
          className={classes.button}
          onClick={handleSendBloqueo}
        >
          {t("sharedBloqueo")}
        </Button>
      }
    />
  );
};

export default BloqueoDialog;
