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
        minWidth={100}
        maxWidth={1000}
        width={100}
        height={100}
        minHeight={100}
        maxHeight={1000}
      >
        {/* <img
          src="https://www.api.legendsofcypher.io/static/cover/0001.jpg"
          alt=""
        /> */}
        {pdfData.map((pdf) => (
          <img src={pdf.img} alt="" />
        ))}
        {/* <img
          src="https://www.api.legendsofcypher.io/static/pdf/0001.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0002.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0003.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0004.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0005.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0006.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0007.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0008.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0009.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0010.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0011.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0012.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0013.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0014.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0015.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0016.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0017.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0018.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0019.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0020.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0021.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0022.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0023.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0024.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0025.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0026.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0027.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0028.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0029.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0030.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0031.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0032.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0033.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0034.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0035.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0036.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0037.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0038.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0039.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0040.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0041.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0042.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0043.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0044.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0045.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0046.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0047.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0048.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0049.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0050.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0051.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0052.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0053.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0054.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0055.jpg"
          alt=""
        />
        <img
          src="https://www.api.legendsofcypher.io/static/pdf/0056.jpg"
          alt=""
        /> */}
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
