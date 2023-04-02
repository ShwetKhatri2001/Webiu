import React from "react"
import { Link } from "gatsby"
import Styles from "./styles"

const ArticleCard = ({ data }) => {
  const classes = Styles()
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <img
          src={data.picture}
          className={classes.articleImg}
          alt="Health is Wealth"
        />
      </div>
      <div className={`${classes.infoContainer}`}>
        <h3 className={`${classes.articleHeading}`}>{data.title}</h3>
        <p className={`${classes.articleText} text-light-gray`}>
          {data.description}
        </p>
        <Link to="/">Learn More</Link>
      </div>
    </div>
  )
}

export default ArticleCard
