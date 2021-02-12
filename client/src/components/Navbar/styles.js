import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    width: "100%",
    background: "rgba(31, 40, 51, 0.35)",
  },
  heading: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "60px",
    fontFamily: "Montserrat",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    color: "#ffffff",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Montserrat",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout: {
    background: "none",
    border: "solid 1px #66fcf1 ",
  },
  [theme.breakpoints.down("sm")]: {
    heading: {
      fontSize: "23px",
    },
  },

  [theme.breakpoints.down("xs")]: {
    brandContainer: {
      display: "none",
    },
    userName: {
      fontSize: "23px",
      marginLeft: "40px",
      marginRight: "30px",
    },
    logout: {
      margin: " 13px 40px 0 0",
      fontSize: "10px",
      padding: "0",
      height: "40px;",
    },
    purple: {
      height: "70px;",
      width: "70px",
      marginLeft: "50px",
    },
    toolbar: {
      width: "190px",
      marginLeft: "105px",
    },
  },
}));
