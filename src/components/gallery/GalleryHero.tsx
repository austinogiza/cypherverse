import React from "react"
import styled from "styled-components"
import { MainButton } from "styles/ButtonStyles"
import { CypherTheme } from "styles/ColorStyles"
import { Body3, Header2, Header6Regular } from "styles/TextStyles"

const GalleryHero = () => {
  return (
    <Body>
      <Cover>
        {" "}
        <SecondRow>
          <SecondRowLeft>
            <GridTitle>Legends of Cypher Collectibles</GridTitle>
            <GridTitleSmall>
              Follow the story, own a piece of the universe
            </GridTitleSmall>
            <RowText>
              Legends of Cypher collectibles are NFTs that are tightly connected
              to the story and lore of the universe. These artifacts may contain
              Easter Eggs, deliver special perks and much more.
            </RowText>
            <RowText>
              Holders of NFTs from the Origin Collection will receive PRIMA{" "}
              <br />
              tokens during the upcoming StoryPrima DAO airdrop.
            </RowText>
            <PrismaButton to="/prisma">
              <p>Info: PRIMA Airdrop</p>
            </PrismaButton>
          </SecondRowLeft>
        </SecondRow>
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
  min-height: 300px;
  padding: 16px;
`

const Cover = styled.div`
  max-width: 844px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const GridTitle = styled(Header2)`
  color: ${CypherTheme.white};
  margin: 8px 0;
  text-align: center;
`

const GridTitleSmall = styled(Header6Regular)`
  color: ${CypherTheme.white};
  margin: 4px 0;
  text-align: center;
`
const RowText = styled(Body3)`
  margin: 16px 0;
  color: ${CypherTheme.white};
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 16px;
    li {
      list-style-type: disc;
      margin: 2px 0;
    }
  }
`
const SecondRow = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
`
const SecondRowLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PrismaButton = styled(MainButton)``

export default GalleryHero
