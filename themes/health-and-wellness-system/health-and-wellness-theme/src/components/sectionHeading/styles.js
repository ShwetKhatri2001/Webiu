import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  headingContainer: {
    padding: "30px 0",
    position: "relative",
  },
  headingContainerAfter: {
    content: '""',
    height: "2px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%)",
    borderColor: "black",
    borderTop: "2px solid",
    width: "35%",
  },
  heading: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    headingContainer: {
      padding: "20px 0",
      textAlign: "center",
    },
  },
}))

export default Styles
