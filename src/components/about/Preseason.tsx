import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body2 } from "styles/TextStyles"
import first from "assets/images/first.png"
import second from "assets/images/second.png"
const Preseason = () => {
  return (
    <Body>
      <Cover>
        <TopRow>
          <RowImage>
            <Image src={first} alt="Legends of cypher preseason" />
          </RowImage>
          <RowText>
            <RowContent>
              Prior to Season One, the Origin Group will release a range of
              content designed to orient fans to the LoC universe, the main
              conflict between Hash and the Centopoly and other vital
              information.
            </RowContent>
          </RowText>
        </TopRow>
        <BottomRow>
          <RowContent>
            Key Pre-Season Lore Drops
            <ul>
              <li>
                Short Story - Meru-36: Destiny’s Fall: This short story tells of
                events that took place thousands of years before the “present
                day” of the Legends of Cypher universe. The Synthetic War was a
                clash between two factions of AIs that led directly to the rise
                of the Centopoly, the main antagonist of our story.
              </li>
              <li>
                Anthology Series - Hash’s Followers: A series of short films
                telling the tale of the people who chose to join Hash’s quest
                for humanity’s freedom.
              </li>
              <li>
                HIstorical Briefs: In-universe documents developed by the
                Centopoly empire focusing on the overall political state of the
                Legends of Cypher Cosmos, travel technology, etc.
              </li>
            </ul>
          </RowContent>
        </BottomRow>{" "}
        <TopRow>
          <RowImage>
            <Image src={second} alt="Legends of cypher preseason" />
          </RowImage>
          <RowText>
            <RowContent>
              Introducing the Origin Collection, a series of NFTs that will be
              released prior to Season One of the Legends of Cypher story
            </RowContent>
          </RowText>
        </TopRow>
        <BottomRow>
          <RowContent>
            Key Pre-Season NFT Drops
            <ul>
              <li>
                Meru-36 Cover: Collector’s Edition: An animated version of the
                Meru-36 cover that can be used to claim a physical copy of the
                Meru-36 book.
              </li>
              <li>
                Cypherian’s Badge: The Cypherian’s Badge will provide holders
                with exclusive access to the Legends of Cypher universe,
                including special NFT drops and more.
              </li>
              <li>
                LoC Collectibles We will also release a series of NFT
                collectibles, including ships and art connected to the larger
                Legends of Cypher universe.
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

export default Preseason
