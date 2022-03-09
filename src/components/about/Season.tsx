import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body2 } from "styles/TextStyles"
import third from "assets/images/third.png"
import fourth from "assets/images/fourth.png"
const Season = () => {
  return (
    <Body>
      <Cover>
        <TopRow>
          <RowImage>
            <Image src={third} alt="Legends of cypher Season" />
          </RowImage>
          <RowText>
            <RowContent>
              Season One of the Legends of Cypher story will focus on the quest
              for the Bridge Tech, a new version of the wormhole technology used
              by the Centopoly to aid its rule over the known Cosmos.
            </RowContent>
          </RowText>
        </TopRow>
        <BottomRow>
          <RowContent>
            Key Season One Lore Drops
            <ul>
              <li>
                Short Film: Prelude to the Quest for the Bridge Tech: Short 
                animated film featuring a clash between Hash and Malarian 
                and the introduction of Legends of Cypher factions. 
              </li>
              <li>
                Legends of Cypher Season One Comics: A series of comics telling
                the main Legends of Cypher story, the conflict between Hash and
                Malarian and the mysterious Bridge Tech.
              </li>
            </ul>
          </RowContent>
        </BottomRow>{" "}
        <TopRow>
          <RowImage>
            <Image src={fourth} alt="Legends of cypher preseason" />
          </RowImage>
          <RowText>
            <RowContent>
              Season One NFT collectibles will be focused on the factions and
              events of the main Legend of Cypher storyline.
            </RowContent>
          </RowText>
        </TopRow>
        <BottomRow>
          <RowContent>
            Key Season One NFT Drops
            <ul>
              <li>
                Cypherian’s Badge: The Cypherian’s Badge will provide holders
                with exclusive access to the Legends of Cypher universe,
                including special NFT drops and more.
              </li>
              <li>
                Faction Badges Fans will be able to collect free Faction Badges,
                which will help immerse them in the Legends of Cypher story.
                Choose carefully.
              </li>
            </ul>
          </RowContent>
        </BottomRow>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
`
const Cover = styled.div`
  max-width: 1255px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const TopRow = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-gap: 24px;
  gap: 24px;
  margin: 16px 0;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const RowImage = styled.div`
  max-height: 275px;
  max-width: 275px;
  width: 100%;
  min-height: 250px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const RowText = styled.div``

const RowContent = styled(Body2)`
  color: ${CypherTheme.white};

  ul {
    margin: 8px 24px;
    li {
      list-style-type: disc;
      margin: 8px 0;
    }
  }
`

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
`

export default Season
