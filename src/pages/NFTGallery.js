import GalleryBody from "components/gallery/GalleryBody"
import GalleryHero from "components/gallery/GalleryHero"

import React, { useEffect } from "react"

const NFTGallery = () => {
  useEffect(() => {
    document.title = "NFT Gallery - Cypherverse"
  }, [])

  return (
    <>
      <GalleryHero />
      <GalleryBody />
    </>
  )
}

export default NFTGallery
