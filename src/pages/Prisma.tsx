import PrismaBody from "components/prisma/PrismaBody"
import PrismaHero from "components/prisma/PrismaHero"
import React, { useEffect } from "react"

const Prisma = () => {
  useEffect(() => {
    document.title = "Lunastus and Sine Ripae - Cypherverse"
  }, [])

  return (
    <>
      <PrismaHero />
      <PrismaBody />
    </>
  )
}

export default Prisma
