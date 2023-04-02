import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  heroContainer: {
    marginTop: "2rem",
    paddingBottom: "50px",
    justifyContent: "space-between",
  },
  heroInfo: {
    width: "40%",
  },
  heroHeading: {
    fontSize: "3rem",
  },
  heroDes: {
    margin: "2rem 0",
    width: "90%",
    fontSize: "1.1rem",
    fontWeight: 300,
    lineHeight: "1.7rem",
  },
  heroImageContainer: {
    width: "55%",
  },
  dotPattern: {
    position: "absolute",
    top: "10rem",
    left: 0,
  },
  [theme.breakpoints.down("sm")]: {
    heroInfo: {
      width: "100%",
      alignItems: "center",
      margin: "auto",
      textAlign: "center",
    },
    heroContainer: {
      marginTop: "0rem",
    },
    heroImageContainer: {
      width: "100%",
      alignItems: "center",
      margin: "auto",
      textAlign: "center",
      marginTop: "15px",
    },
    heroDes: {
      margin: "1rem 0",
      width: "100%",
    },
  },
}))

export default Styles
