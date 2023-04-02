import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  testimonialContainer: {
    background: "linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%)",
    padding: "1.5rem 5rem",
    borderRadius: "0.8rem",
  },
  testimonial: {
    padding: "3rem 2rem",
  },
  avatar: {
    "& div": {
      border: "4px white solid",
      borderRadius: "50%",
    },
    "& img": {
      height: "125px",
      width: "125px",
      borderRadius: "50%",
    },
  },
  testimonialText: {
    width: "40%",
    justifySelf: "flex-end",
    textAlign: "justify",
    color: "#fff",
    opacity: 0.9,
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  userInfoUnit: {
    marginLeft: "2rem",
    color: "#fff",
    "& h3": {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "1.9rem",
    },
    "& p": {
      fontWeight: 300,
      opacity: 0.85,
    },
  },
  carouselNavContainer: {
    marginTop: "2rem",
  },
  dotContainer: {
    margin: "0 1rem",
    "& div": {
      margin: "0 0.5rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    testimonialContainer: {
      padding: "1rem 1rem",
    },
    testimonial: {
      width: "100%",
      padding: "1rem 1rem",
      display: "flex",
      alignItems: "center",
    },
    testimonialText: {
      width: "100%",
      textAlign: "center",
    },
    userInfoUnit: {
      textAlign: "center",
      margin: "1rem 0",
    },
    carouselNavContainer: {
      display: "flex",
      flexDirection: "row",
    },
    dotContainer: {
      display: "flex",
      flexDirection: "row",
    },
  },
}))

export default Styles
