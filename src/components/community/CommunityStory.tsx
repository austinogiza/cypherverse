import { CypherTheme } from "styles/ColorStyles"
import { Body2, Header2, Header3, Header5 } from "styles/TextStyles"
import React, { FC } from "react"
import styled from "styled-components"

const CommunityStory: FC = () => {
  return (
    <Body>
      <StoryGrid>
        <MainStoryTitle>Story Mining Process Phase</MainStoryTitle>
        <StoryRow>
          <StoryLeft>
            <StoryTitle>On-Chain </StoryTitle>
            <StoryText>
              Legend Inscribed to Ethereum Blockchain, Content Become NFT
              Faction Point Awarded
            </StoryText>
          </StoryLeft>
          <StoryRight>
            <StoryOutside>From Story To Legend</StoryOutside>
            <StoryBox>
              <StoryLabel>Legend</StoryLabel>
              <StoryText>
                Faction Lore can become a legend by passing a community-wide
                vote among all cypher holders. Legends become an official part
                of the Cypher-verse canon, which means:
              </StoryText>
              <StoryText>
                Added to Blockchain: The title/text is inscribed to the Ethereum
                blockchain via the Story Contract, which is the official
                on-chain record of Cypher-verse canon.
              </StoryText>
              <StoryText>
                Work commissioned: The story Group commissions and develop works
                from professional and well-known artists that will be turned
                into NFTs for sale on the Cypher-verse DEX (creators wil be able
                to stake special Cypherverse Legend NFTs to recieve perpetual
                royalties from DEX-wide sales)
              </StoryText>
              <StoryText>
                Faction Point Awarded: The creators faction recieves a Faction
                Point which boost their voting power during Event where Faction
                Vectors can determine the evolution of the overall Cypher-verse
                narrative
              </StoryText>
            </StoryBox>
            <StoryArrow>
              <svg
                width="41"
                height="61"
                viewBox="0 0 41 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0112 57.166V60.666H24.0112V57.166H17.0112ZM20.5112 0.335938L0.30397 35.3359H40.7185L20.5112 0.335938ZM24.0112 57.166V31.8359H17.0112V57.166H24.0112Z"
                  fill="white"
                />
              </svg>
            </StoryArrow>
          </StoryRight>
          {/* end of first row */}
          {/* start of second row */}
          <StoryLeft>
            <StoryTitle>Off-Chain </StoryTitle>
            <StoryText>Faction Member Snapshot Vote</StoryText>
          </StoryLeft>
          <StoryRight>
            <StoryBox>
              <StoryLabel>Faction Lore</StoryLabel>
              <StoryText>
                Factions go through an internal process of turning Lore into
                Faction Lore. To become Faction Lore, popular content must be
                voted on by eligible Cypher holders within the Faction (voters
                hold both a Faction badge/NFT and Cypher in their wallets) via
                an off-chain vote (Snapshot, etc.)
              </StoryText>
            </StoryBox>
            <StoryArrow>
              <svg
                width="41"
                height="61"
                viewBox="0 0 41 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0112 57.166V60.666H24.0112V57.166H17.0112ZM20.5112 0.335938L0.30397 35.3359H40.7185L20.5112 0.335938ZM24.0112 57.166V31.8359H17.0112V57.166H24.0112Z"
                  fill="white"
                />
              </svg>{" "}
            </StoryArrow>
          </StoryRight>
          {/* end of second row */}
          {/* start of third row */}
          <StoryLeft>
            <StoryTitle>Off-Chain </StoryTitle>
            <StoryText>Likes/Visit Determine Story Popularity</StoryText>
          </StoryLeft>
          <StoryRight>
            <StoryBox>
              <StoryLabel>Lore</StoryLabel>
              <StoryText>
                Faction members publicize their content to other community
                members. Content that receieve X number of visits/likes, etc.
                become Lore
              </StoryText>
            </StoryBox>
            <StoryArrow>
              <svg
                width="41"
                height="61"
                viewBox="0 0 41 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0112 57.166V60.666H24.0112V57.166H17.0112ZM20.5112 0.335938L0.30397 35.3359H40.7185L20.5112 0.335938ZM24.0112 57.166V31.8359H17.0112V57.166H24.0112Z"
                  fill="white"
                />
              </svg>
            </StoryArrow>
          </StoryRight>
          {/* end of third row */}
          {/* start of fourth row */}
          <StoryLeft>
            <StoryTitle>Off-Chain:</StoryTitle>
            <StoryText>Post to Cypher-verse content sites</StoryText>
          </StoryLeft>
          <StoryRight>
            <StoryBox>
              <StoryLabel>Stories</StoryLabel>
              <StoryText>
                Members of Factions of develop Cypher-Verse content (stories)
                using story bible, and canon content. Content published on
                CYpher-Verse content site. (Standard Wordpress community site.)
              </StoryText>
            </StoryBox>
          </StoryRight>
          {/* end of fourth row */}
        </StoryRow>
      </StoryGrid>
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
  color: ${CypherTheme.white};
  height: 100%;
  padding: 16px;
`

const StoryGrid = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`
const MainStoryTitle = styled(Header2)`
  margin: 32px 0;
  text-align: center;
`
const StoryRow = styled.div`
  width: 100%;
  min-height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  gap: 24px;
  align-items: center;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    justify-items: center;
    place-items: center;
  }
`
const StoryLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const StoryTitle = styled(Body2)``

const StoryOutside = styled(Header3)`
  text-align: center;
  margin: 32px 0;
`
const StoryText = styled(Body2)`
  margin: 16px 0;
`
const StoryRight = styled.div``
const StoryArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin: 32px 0;
`
const StoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${CypherTheme.dark};
  padding: 30px;
  min-height: 320px;
  width: 100%;
  max-width: 680px;
  text-align: center;
`
const StoryLabel = styled(Header5)``
export default CommunityStory
