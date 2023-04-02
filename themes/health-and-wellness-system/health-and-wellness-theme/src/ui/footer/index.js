import React from "react"
import FooterLinkSet from "../../components/footerLinkSet"
import Styles from "./styles"

const Footer = () => {
  const classes = Styles()
  return (
    <footer className={classes.footerContainer}>
      <div className={`margin-on-side ${classes.footerItemsRow}`}>
        <div className={`${classes.companyInfo}`}>
          <div className={classes.branding}>
            <div className={classes.logoFooter}>H</div>
            <h3>HealthScore</h3>
          </div>
          <p className={`${classes.companyDes}`}>
            HealthScore provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p>©HealthScore PTY LTD 2020. All rights reserved</p>
        </div>
        <FooterLinkSet />
      </div>
    </footer>
  )
}

export default Footer
