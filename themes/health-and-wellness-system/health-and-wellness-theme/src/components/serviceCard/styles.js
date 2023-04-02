import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  cardContainer: {
    alignSelf: "stretch",
    backgroundColor: "#ffffff",
    boxShadow: "10px 40px 50px 0px #e5e9f666",
    maxWidth: "31%",
    marginBottom: "30px",
    padding: "40px 30px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: "10px 30px 50px 0px #e5e9f6e8",
      transform: "scale(1.02)",
    },
    "&:hover $imageContainer": {
      animation: "$shake 0.3s ease-in-out 3",
    },
    "&:hover $div": {
      animation: "grow 0.3s forwards",
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: "100px",
    paddingBottom: "20px",
  },
  "@keyframes shake": {
    "30%": {
      transform: "rotate(-10deg)",
    },
    "50%": {
      transformOrigin: "center center",
    },
    "100%": {
      transform: "rotate(10deg)",
    },
  },
  "@keyframes grow": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(1.05)",
    },
  },
  cardHeading: {
    fontWeight: 700,
    margin: "15px 0",
  },
  cardDes: {
    fontSize: "1rem",
    fontWeight: 300,
    maxWidth: "90%",
    lineHeight: "1.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    cardContainer: {
      maxWidth: "100%",
    },
  },
}))

export default Styles
