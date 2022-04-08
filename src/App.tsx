import React, { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "container/Layout"
import ScrollToTop from "components/ScrollTop"
import Translator from "pages/Translator"
import PageTransition from "components/PageTransition"
import "react-toastify/dist/ReactToastify.css"
import gsap from "gsap"

const Home = lazy(() => import(/* webpackPrefetch:true */ "pages/Home"))
const About = lazy(() => import(/* webpackPrefetch:true */ "pages/About"))
const Community = lazy(
  () => import(/* webpackPrefetch:true */ "pages/Community")
)

const Explore = lazy(() => import(/* webpackPrefetch:true */ "pages/Explore"))
const NFT = lazy(() => import(/* webpackPrefetch:true */ "pages/NFT"))
const Legends = lazy(() => import(/* webpackPrefetch:true */ "pages/Legends"))
const Claim = lazy(() => import(/* webpackPrefetch:true */ "pages/NFTGallery"))
const ErrorPage = lazy(() => import(/* webpackPrefetch:true */ "pages/404"))
const Prisma = lazy(() => import(/* webpackPrefetch:true */ "pages/Prisma"))
const App = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />

          <Suspense fallback={<PageTransition />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/community" element={<Community />} />
              <Route path="/legends" element={<Legends />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/meru-36" element={<NFT />} />
              <Route path="/nft-gallery" element={<Claim />} />
              <Route path="/translator" element={<Translator />} />
              <Route path="/lunastus-ripae" element={<Prisma />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default React.memo(App)
