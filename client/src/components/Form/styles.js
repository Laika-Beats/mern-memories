import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    // padding: theme.spacing(2),
    background: "rgba(31, 40, 51, 0.35)",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "#66fcf1",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "#66fcf1",
    background: "#1f2833",
    border: "solid 1px #66fcf1 ",
    "&:hover": {
      backgroundColor: "#66fcf1",
      color: "#FFF",
    },
  },
  field: {
    background: "#fff",
    color: "#66fcf1",
  },
  [theme.breakpoints.down("sm")]: {
    paper: {
      width: "400px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    paper: {
      width: "100%",
    },
  },
}));
