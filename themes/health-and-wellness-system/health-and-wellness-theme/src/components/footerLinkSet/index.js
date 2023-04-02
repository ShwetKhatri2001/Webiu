import React from "react"
import Styles from "../../ui/footer/styles"
import { Link } from "gatsby"
import footerLinksList from "../../../assets/data/footerLinksList"

const FooterLinkSet = () => {
  const classes = Styles()

  return (
    <>
      {footerLinksList.map(linkSet => (
        <div className={`${classes.linkGroup}`}>
          <h4>{linkSet.heading}</h4>
          <div>
            <ul className={`${classes.footerLinks}`}>
              {linkSet.links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to="/">{item}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default FooterLinkSet
