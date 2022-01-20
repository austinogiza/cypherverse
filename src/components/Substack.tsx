import React from "react"
import styled from "styled-components"

const Substack = () => {
  return (
    <Body>
      <iframe
        title="substack"
        src="https://legendsofcypher.substack.com/embed"
        width="600"
        height="600"
        style={{ background: "transparent" }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Body>
  )
}

const Body = styled.div`
  max-width: 900px;
  margin: 0 auto;
  min-height: 400px;
  /* .use-theme-bg {
    background: transparent;
  }
  .embed-page {
    background: transparent;
  } */
`
export default Substack
