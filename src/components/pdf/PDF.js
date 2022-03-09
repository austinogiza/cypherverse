import React, { useState } from "react"
import { Document, Page } from "react-pdf"
import styled from "styled-components"
import meru from "assets/pdf/Meru-36-web.pdf"
const PDF = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }
  return (
    <Body>
      {" "}
      <Document file={meru} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </Body>
  )
}
const Body = styled.div`
  height: 100%;
  width: 100%;
`
export default PDF
