import React from "react"
import ArticleCard from "../articleCard"
import SectionHeading from "../sectionHeading"
import articlesList from "../../../assets/data/articlesList"
import Button from "../button"

const Articles = () => {
  return (
    <section className={"margin-on-side"}>
      <SectionHeading headingTitle={"Check out our latest Articles"} />
      <div className={`row aside`} style={{ margin: "3rem 0" }}>
        {articlesList.map(item => {
          return <ArticleCard key={item.id} data={item} />
        })}
      </div>
      <div className="row center">
        <Button text={"View All"} />
      </div>
    </section>
  )
}

export default Articles
