import React, { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "container/Layout"
import ScrollToTop from "components/ScrollTop"
import Translator from "pages/Translator"
import PageTransition from "components/PageTransition"
import "react-toastify/dist/ReactToastify.css"
import gsap from "gsap"
import BookModal from "components/BookModal"
import Home from "pages/Home"
import About from "pages/About"
import Community from "pages/Community"
import Legends from "pages/Legends"
import Explore from "pages/Explore"
import NFT from "pages/NFT"
import ErrorPage from "pages/404"

// const Home = lazy(() => import(/* webpackPrefetch:true */ "pages/Home"))
// const About = lazy(() => import(/* webpackPrefetch:true */ "pages/About"))
// const Community = lazy(
//   () => import(/* webpackPrefetch:true */ "pages/Community")
// )

// const Explore = lazy(() => import(/* webpackPrefetch:true */ "pages/Explore"))
// const NFT = lazy(() => import(/* webpackPrefetch:true */ "pages/NFT"))
// const Legends = lazy(() => import(/* webpackPrefetch:true */ "pages/Legends"))
// const ErrorPage = lazy(() => import(/* webpackPrefetch:true */ "pages/404"))
const App = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/legends" element={<Legends />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/meru-36" element={<NFT />} />
            <Route path="/translator" element={<Translator />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {/* <Suspense fallback={<PageTransition />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/community" element={<Community />} />
              <Route path="/legends" element={<Legends />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/meru-36" element={<NFT />} />
              <Route path="/translator" element={<Translator />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense> */}
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default React.memo(App)
