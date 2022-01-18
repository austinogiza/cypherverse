import styled from "styled-components"

import Shuffle from "components/home/Shuffle"
import React, { FC, useEffect } from "react"
import { CypherTheme } from "styles/ColorStyles"

const Home: FC = () => {
  useEffect(() => {
    document.title = "Home - Cypherverse"
  }, [])
  return (
    <Body>
      <Shuffle />
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100vh;
  background: #171717;
  @media only screen and (max-width: 1050px) {
    background: ${CypherTheme.black};
  }
`

export default Home
