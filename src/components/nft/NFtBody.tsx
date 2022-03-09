import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"

import { nftCardData } from "./CardData"
import NFTCard from "./NFTCards"

const NFTBody = () => {
  return (
    <Body>
      <Cover>
        {" "}
        <CardsRow>
          {nftCardData.map((data, index) => (
            <NFTCard
              key={index}
              slug={data.slug}
              image={data.image}
              page={data.page}
              external={data.external}
            />
          ))}
        </CardsRow>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${CypherTheme.primary};
  height: 100%;
  padding: 16px;
`

const Cover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-height: 653px;
    min-height: 250px;
    height: 100%;
    width: 100%;
    max-width: 1312px;
    object-fit: contain;
  }
`

const CardsRow = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 64px auto;
  grid-gap: 40px;
  gap: 40px;
  max-width: 1322px;
  min-height: 500px;
  place-items: center;
  width: 100%;

  @media only screen and (max-width: 880px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default NFTBody
