import React from "react"
import hero from "../../../assets/images/hero.svg"
import Button from "../button"
import Styles from "./styles"

const Hero = () => {
  const classes = Styles()
  return (
    <section className={`${classes.heroContainer} row margin-on-side`}>
      <div className={`${classes.heroInfo}`}>
        <h1 className={classes.heroHeading}>Virtual healthcare for you</h1>
        <p className={`${classes.heroDes} text-light-gray`}>
          HealthScore provides progressive, and affordable healthcare,
          accessible on mobile and online for everyone
        </p>
        <Button fill="fill" text={"Consult Today"} />
      </div>
      <div className={`${classes.heroImageContainer}`}>
        <img src={hero} alt="Health is Wealth" />
      </div>
    </section>
  )
}

export default Hero
