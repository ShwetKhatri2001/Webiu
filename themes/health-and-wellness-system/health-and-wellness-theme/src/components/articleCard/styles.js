import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  cardContainer: {
    alignSelf: "stretch",
    backgroundColor: "#ffffff",
    boxShadow: "4px 15px 20px 11px #e5e9f666",
    maxWidth: "30%",
    marginBottom: "30px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    overflow: "hidden",
    "&:hover $img": {
      transform: "scale(1.1)",
    },
  },
  imageContainer: {
    "& img": {
      transition: "all 0.3s ease",
      width: "100%",
    },
  },
  infoContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "25px",
    "& a": {
      textDecoration: "none",
      color: "#4089ed",
      marginTop: "auto",
      justifySelf: "flex-end",
    },
  },
  articleHeading: {
    fontWeight: 700,
    lineHeight: "2rem",
  },
  articleText: {
    margin: "15px 0",
    fontSize: "0.9rem",
    fontWeight: 300,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    cardContainer: {
      maxWidth: "100%",
    },
  },
}))

export default Styles
