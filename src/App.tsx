import React, { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "container/Layout"
import ScrollToTop from "components/ScrollTop"
import Translator from "pages/Translator"
import PageTransition from "components/PageTransition"
import "react-toastify/dist/ReactToastify.css"
const Home = lazy(() => import(/* webpackPrefetch:true */ "pages/Home"))
const About = lazy(() => import(/* webpackPrefetch:true */ "pages/About"))
const Community = lazy(
  () => import(/* webpackPrefetch:true */ "pages/Community")
)
const Legends = lazy(() => import(/* webpackPrefetch:true */ "pages/Legends"))
const ErrorPage = lazy(() => import(/* webpackPrefetch:true */ "pages/404"))
const App = () => {
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
              <Route path="/translator" element={<Translator />} />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default React.memo(App)
