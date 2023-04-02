import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  btn: {
    outline: "none",
    border: "none",
    cursor: "pointer",
    width: "200px",
    padding: "12px 0",
    textAlign: "center",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#458ff6",
    borderRadius: "30px",
    fontSize: "1.05rem",
    transition: "all 0.2s ease",
    fontWeight: 700,
    "&:hover": {
      boxShadow: "0px 4px 15px 0px rgba(69, 143, 246, 0.5)",
    },
  },
  textBlue: {
    color: "#458ff6",
  },
  textWhite: {
    color: "#fff",
  },
  blueBackground: {
    background: "#458ff6",
  },
  whiteBackground: {
    background: "#fff",
  },
}))

export default Styles
