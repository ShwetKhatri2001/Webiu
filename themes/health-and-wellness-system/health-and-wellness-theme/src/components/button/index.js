import React from "react"
import Styles from "./styles"

const Button = ({ fill = "outline", extraStyles, text }) => {
  const classes = Styles()

  const textStyle = fill === "outline" ? classes.textBlue : classes.textWhite
  const background =
    fill === "outline" ? classes.whiteBackground : classes.blueBackground
  return (
    <div>
      <button
        className={`${classes.btn} ${textStyle} ${background}`}
        style={extraStyles}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
