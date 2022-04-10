import Banner from "components/Banner"
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import React from "react"
import { useLocation } from "react-router-dom"

import { ToastContainer } from "react-toastify"

const Layout = ({ children }) => {
  const router = useLocation()
  return (
    <React.Fragment>
      {router.pathname === "/meru-36" ? null : <Navbar />}
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
      <Banner />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
