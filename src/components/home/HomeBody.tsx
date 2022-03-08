import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body1 } from "styles/TextStyles"

import cent from "assets/images/cent.gif"
import { cardData } from "./CardData"
import HomeCard from "./HomeCard"
import { Link } from "react-router-dom"
const HomeBody = () => {
  return (
    <Body>
      <Cover>
        {" "}
        <FirstRow>
          <FirstRowLeft>
            <GridImage src={cent} alt="about cypherverse" />
          </FirstRowLeft>
          <FirstRowRight>
            <RowText>
              Welcome to Legends of Cypher, a multimedia project that tells the
              story of a future human civilization fighting for individual
              freedom. On one side is Hash and his “gift”, a technology that can
              free humanity from bondage. Malarian, a high-ranking agent of the
              inter-planetary Centopoly empire, will stop at nothing to prevent
              Hash and his allies from giving humanity its freedom.
            </RowText>{" "}
            <RowText>
              Our story will be presented in a series of comics that will be
              released across multiple “seasons.” Fans will be able to collect
              artifacts from the Legends of Cypher universe via NFTs, short
              stories, films, music, and art across a variety of mediums.
            </RowText>{" "}
            <Buttons>
              <DiscordButton to="/legends">
                <p>LoC Seasons</p>
              </DiscordButton>
            </Buttons>
          </FirstRowRight>
        </FirstRow>
        <CardsRow>
          {cardData.map((data, index) => (
            <HomeCard
              key={index}
              slug={data.slug}
              image={data.image}
              page={data.page}
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

const FirstRow = styled.div`
  display: grid;
  grid-template-areas: "FirstLeft FirstRight";
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 64px auto;
  grid-gap: 40px;
  gap: 40px;
  max-width: 1300px;
  width: 100%;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "FirstLeft"
      "FirstRight";
    margin: 16px auto;
  }
`
const FirstRowLeft = styled.div`
  grid-area: FirstLeft;
`

const FirstRowRight = styled.div`
  grid-area: FirstRight;
`
const RowText = styled(Body1)`
  margin: 16px 0;
  color: ${CypherTheme.white};
`

const CardsRow = styled.div`
  display: grid;
  grid-template-areas: "FirstLeft FirstRight";
  grid-template-columns: repeat(3, 1fr);
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
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "FirstLeft"
      "FirstRight";
    margin: 16px auto;
  }
`
const GridImage = styled.img`
  min-height: 250px;
  max-height: 744px;
  height: 100%;
  max-width: 723px;
  width: 100%;
  object-fit: cover;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  width: 100%;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const DiscordButton = styled(Link)`
  height: 58px;
  width: 190px;
  background: ${CypherTheme.white};
  outline: none;
  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);
  border-radius: 0px;
  color: ${CypherTheme.primary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  line-height: 1.2;
  :hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  p {
    margin: 0 0 0 10px;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`
export default HomeBody
