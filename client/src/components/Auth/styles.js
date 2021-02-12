import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(31, 40, 51)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#66fcf1",
    background: "rgba(31, 40, 51)",
    "&:hover": {
      backgroundColor: "#66fcf1",
      color: "#FFF",
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    color: "#66fcf1",
    background: "rgba(31, 40, 51)",
    "&:hover": {
      backgroundColor: "#66fcf1",
      color: "#FFF",
    },
  },
  field: {
    background: "#fff",
    color: "#66fcf1",
  },
}));
