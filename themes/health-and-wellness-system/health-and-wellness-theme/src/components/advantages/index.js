import React from "react"
import AdvantageItem from "../advantageItem"
import advantagesList from "../../../assets/data/advantagesList"

const Advantages = () => {
  return (
    <section className="margin-on-side">
      <AdvantageItem data={advantagesList[0]} />
      <AdvantageItem data={advantagesList[1]} direction="rev" />
    </section>
  )
}

export default Advantages
