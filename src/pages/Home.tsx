import HomeBody from "components/home/HomeBody"
import HomeHero from "components/home/HomeHero"
import React, { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    document.title = "Home - Cypherverse"
  }, [])

  return (
    <>
      <HomeHero />
      <HomeBody />
    </>
  )
}

export default Home
