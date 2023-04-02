import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <title>HealthScore - Your Health Partner</title>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
