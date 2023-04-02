import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles(theme => ({
  footerContainer: {
    background: "linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%)",
    marginTop: "5rem",
    padding: "5rem 0",
    color: "#fff",
  },
  footerItemsRow: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    height: "9rem",
  },
  companyInfo: {
    width: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& p": {
      fontWeight: 300,
      fontSize: "0.9rem",
      lineHeight: "1.5rem",
    },
  },
  companyDes: {
    margin: "1rem 0",
    width: "75%",
  },
  logoFooter: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "#5a98f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  branding: {
    display: "flex",
    alignItems: "center",
    "& h3": {
      color: "inherit",
      marginLeft: "0.8rem",
    },
  },
  linkGroup: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "space-between",
  },
  footerLinks: {
    listStyle: "none",
    "& li": {
      padding: "5px 0",
      "&:last-child": {
        padding: 0,
      },
      "& a": {
        textDecoration: "none",
        color: "inherit",
        fontWeight: 300,
        opacity: 0.9,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    footerItemsRow: {
      height: "auto",
      maxHeight: "20rem",
    },
    companyInfo: {
      width: "90%",
    },
    linkGroup: {
      marginTop: "2rem",
      width: "30%",
    },
    linkGroupTitle: {
      paddingBottom: "20px",
    },
  },
}))

export default Styles
