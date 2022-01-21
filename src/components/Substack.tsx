import React from "react"
import styled from "styled-components"

const Substack = () => {
  return (
    <Body>
      <iframe
        title="substack"
        src="https://legendsofcypher.substack.com/embed"
        width="100%"
        height="650"
        style={{ background: "transparent" }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Body>
  )
}

const Body = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  min-height: 400px;
  /* .use-theme-bg {
    background: transparent;
  } */

  .publication-tagline {
    font-size: 16px;
    margin: 8px 0 !important;
  }

  .embed-page {
    background: transparent;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 650px) {
    .publication-tagline {
      font-size: 13px;
    }
    .publication-name {
      font-size: 26px;
    }
  }
`
export default Substack
