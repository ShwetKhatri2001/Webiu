import React from "react"
import SectionHeading from "../sectionHeading"
import ServiceCard from "../serviceCard"
import Button from "../button"
import Styles from "./styles"
import servicesList from "../../../assets/data/servicesList"

const Services = () => {
  const classes = Styles()

  return (
    <section className={classes.container}>
      <div className="margin-on-side">
        <SectionHeading headingTitle="Our Services" />
        <p className={`${classes.servicesDes} text-light-gray`}>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <div className={`row ${classes.serviceList}`}>
          {servicesList.map(item => {
            return <ServiceCard service={item} key={item.id} />
          })}
        </div>
        <div className="row center">
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  )
}

export default Services
