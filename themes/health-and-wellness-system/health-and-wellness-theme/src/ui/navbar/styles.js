import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  barCheck: {
    backgroundColor: "blue",
  },
  backCheck: {
    backgroundColor: "blue",
  },
  navContainer: {
    padding: "2rem 0",
    justifyContent: "space-between",
  },
  navLinks: {
    listStyle: "none",
  },
  navLink: {
    marginLeft: "2.5rem",
    fontSize: "1.1rem",
    textDecoration: "none",
    opacity: "60%",
    "&:hover": {
      opacity: 0.9,
    },
    "&:active": {
      opacity: 1,
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  activeNavLink: {
    opacity: "100%",
    fontWeight: "700",
  },
  navMenuButton: {
    display: "none",
  },
  insideContainer: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    navContainer: {
      flexDirection: "row",
    },
    navMenuButton: {
      display: "inline-block",
    },
    navLinks: {
      zIndex: 999,
      position: "absolute",
      top: 0,
      left: 0,
      paddingTop: "3rem",
      backgroundColor: "#333",
      opacity: 0.97,
      minHeight: "100vh",
      maxHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      transition: "all 0.5s ease-in-out",
    },
    hide: {
      transform: "translateX(-100%)",
    },
    show: {
      transform: "translateX(0)",
    },
    navLink: {
      opacity: 1,
      margin: 0,
      padding: "1.8rem 0",
      borderBottom: "1px solid",
      borderColor: "rgba(255, 255, 255, 0.241)",
      alignSelf: "stretch",
      textAlign: "center",
      "& a": {
        color: "#fff",
      },
    },
    insideContainer: {
      position: "absolute",
      right: "10%",
      top: "5%",
      display: "block",
    },
  },
}))

export default Styles
