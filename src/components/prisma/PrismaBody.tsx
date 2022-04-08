import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"

import { cardData } from "./CardData"
import HomeCard from "./PrismaCard"

const PrismaBody = () => {
  return (
    <Body>
      <Cover>
        {" "}
        <CardsRow>
          {cardData.map((data, index) => (
            <HomeCard
              key={index}
              slug={data.slug}
              image={data.image}
              page={data.page}
              link={data.link}
              text={data.text}
              external={data.external}
              tag={data.hashtag}
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
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default PrismaBody
