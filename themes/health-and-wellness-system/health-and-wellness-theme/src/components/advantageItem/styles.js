import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  imageContainer: {
    maxWidth: "50%",
    padding: "35px",
  },
  infoContainer: {
    width: "40%",
    textAlign: "left",
  },
  heading: {
    width: "80%",
    paddingBottom: "30px",
    fontSize: "2rem",
    fontWeight: 700,
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "20%",
      height: "2px",
      backgroundColor: "#333",
    },
  },
  description: {
    fontSize: "1rem",
    fontWeight: 300,
    padding: "30px 0",
    lineHeight: "1.8rem",
    opacity: 0.8,
  },
  [theme.breakpoints.down("sm")]: {
    imageContainer: {
      maxWidth: "100%",
      padding: "10px",
    },
    infoContainer: {
      width: "100%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      width: "100%",
      textAlign: "center",
      paddingBottom: "15px",
      "&:after": {
        left: "50%",
        transform: "translate(-50%, 0)",
      },
    },
    description: {
      padding: "15px 0",
      textAlign: "center",
    },
  },
}))

export default Styles
