import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  container: {
    paddingBottom: "40px",
    position: "relative",
  },
  backOval: {
    position: "absolute",
    left: "-3rem",
    top: "2rem",
    width: "600px",
    height: "600px",
  },
  serviceList: {
    justifyContent: "space-between",
    marginTop: "4rem",
    marginBottom: "2.7rem",
  },
  servicesDes: {
    width: "80%",
    textAlign: "center",
    margin: "auto",
    marginTop: "30px",
    lineHeight: "1.6rem",
    fontWeight: 300,
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    serviceList: {
      alignItems: "center",
    },
  },
}))

export default Styles
