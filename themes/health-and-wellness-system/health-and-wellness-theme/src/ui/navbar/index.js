import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../../assets/images/logo.svg"
import { HamburgerButton } from "react-hamburger-button"
import Styles from "./styles.js"

const Navbar = () => {
  const [hidden, setHindden] = useState(true)
  const classes = Styles()

  return (
    <nav>
      <div className={`margin-on-side row ${classes.navContainer}`}>
        <img src={logo} alt="Health is Wealth" />
        <ul
          className={`row ${classes.navLinks} ${
            hidden ? classes.hide : classes.show
          }`}
          onClick={() => {
            setHindden(current => !current)
          }}
        >
          <div
            className={`${classes.navMenuButton} ${classes.insideContainer}`}
          >
            <HamburgerButton
              strokeWidth={3}
              open={!hidden}
              animationDuration={0.5}
              onClick={e => {
                e.stopPropagation()
                setHindden(current => {
                  return !current
                })
              }}
              color={"white"}
              width={20}
              height={17}
            />
          </div>
          <li
            className={` ${classes.activeNavLink} text-dark-gray ${classes.navLink}`}
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li className={` text-dark-gray ${classes.navLink}`}>
            <Link to="/">Find a doctor</Link>
          </li>
          <li className={` text-dark-gray ${classes.navLink}`}>
            <Link to="/">Apps</Link>
          </li>
          <li className={` text-dark-gray ${classes.navLink}`}>
            <Link to="/">Testimonials</Link>
          </li>
          <li className={` text-dark-gray ${classes.navLink}`}>
            <Link to="/">About us</Link>
          </li>
        </ul>
        <div className={`${classes.navMenuButton}`}>
          <HamburgerButton
            strokeWidth={3}
            open={!hidden}
            animationDuration={0.5}
            onClick={() =>
              setHindden(current => {
                return !current
              })
            }
            width={20}
            height={17}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
