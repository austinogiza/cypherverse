import React, { useRef } from "react"
import styled from "styled-components"

import HTMLFlipBook from "react-pageflip"
import { CypherTheme } from "styles/ColorStyles"
import { pdfData } from "./PDFData"
const PDF = () => {
  const pageFlip = useRef()

  const previousPage = () => {
    pageFlip.current.pageFlip().flipPrev()
  }
  const nextPage = () => {
    pageFlip.current.pageFlip().flipNext()
  }
  return (
    <Cover>
      {" "}
      <Body
        ref={pageFlip}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        width={400}
        height={400}
        minHeight={100}
        maxHeight={1000}
      >
        {pdfData.map((pdf) => (
          <img src={pdf.img} alt="" />
        ))}
      </Body>
      <Flipper>
        <PrevButton onClick={previousPage}>Previous Page</PrevButton>
        <NextButton onClick={nextPage}>Next Page</NextButton>
      </Flipper>
    </Cover>
  )
}

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Flipper = styled.div`
  position: relative !important;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  cursor: pointer;
`
const PrevButton = styled.button`
  max-width: 180px;
  width: 100%;
  cursor: pointer;
  height: 24px;
  background: ${CypherTheme.white};
  border: none;
  border-radius: 8px;
  margin: 8px;
`
const NextButton = styled.button`
  max-width: 180px;
  width: 100%;
  height: 24px;
  background: ${CypherTheme.white};
  border: none;
  border-radius: 8px;
  margin: 8px;
`
const Body = styled(HTMLFlipBook)`
  display: flex !important;
  overflow: hidden !important;
  /* height: 100%; */
  position: relative !important;
  width: 100% !important;
  max-width: 500px !important;
  display: flex !important;
  height: 420px !important;
  margin: 0 auto !important;
  left: 0% !important;
  top: 0% !important;
  /* transform: translate(-50%, -50%) !important; */
  img {
    width: 100% !important;
    max-width: 500px !important;
    height: 500px !important;
    margin: 0 auto !important;
    left: 0 !important;
    top: 0 !important;
    object-fit: contain !important;
    position: relative !important;
  }
  .demoPage {
    height: 100%;
    width: 100%;
  }
`
export default PDF
