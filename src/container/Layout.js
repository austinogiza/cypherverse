import Footer from "components/Footer"
import Navbar from "components/Navbar"
import React from "react"

import { ToastContainer } from "react-toastify"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
