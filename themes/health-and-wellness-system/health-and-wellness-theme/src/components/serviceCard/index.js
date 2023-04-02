import React from "react"
import Styles from "./styles"

const ServiceCard = ({ service }) => {
  const classes = Styles()

  return (
    <div className={classes.cardContainer}>
      <div className={`${classes.imageContainer}`}>
        <div>
          <img src={service.picture} alt="Health is Wealth" />
        </div>
      </div>
      <h3 className={`${classes.cardHeading}`}>{service.title}</h3>
      <p className={`${classes.cardDes} text-light-gray`}>
        {service.description}
      </p>
    </div>
  )
}

export default ServiceCard
