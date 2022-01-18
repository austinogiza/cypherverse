import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import Spinner from "react-spinner-material"
const PageTransition = () => {
  return (
    <Body>
      <Spinner radius={32} color={"#FFFFFF"} stroke={2} visible={true} />
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  background: ${CypherTheme.dark};
  display: flex;
  position: fixed;
  z-index: 60;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  color: ${CypherTheme.white};
`
export default PageTransition
