import React from "react"
import Button from "../button"
import Styles from "./styles"

const AdvantageItem = ({ data, direction }) => {
  const classes = Styles()

  return (
    <div className={`row aside ${direction}`} style={{ margin: "5rem 0" }}>
      <div className={classes.imageContainer}>
        <img src={data.image} alt="Health is Wealth" />
      </div>
      <div className={classes.infoContainer}>
        <h3 className={classes.heading}>{data.title}</h3>
        <p className={`${classes.description} text-light-gray`}>
          {data.description}
        </p>
        <Button text={data.buttonText} />
      </div>
    </div>
  )
}

export default AdvantageItem
