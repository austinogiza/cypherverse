import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body1, Header3 } from "styles/TextStyles"
import Team from "components/about/Team"
import RoadMap from "components/about/RoadMap"
import React, { FC, useEffect } from "react"

import cent from "assets/images/cent.gif"
const About: FC = () => {
  useEffect(() => {
    document.title = "About - Cypherverse"
  }, [])
  return (
    <>
      <Body>
        <Cover>
          <FirstRow>
            <FirstRowLeft>
              <GridImage src={cent} alt="about cypherverse" />
            </FirstRowLeft>
            <FirstRowRight>
              <RowText>
                Legends of Cypher is a multimedia project that tells the story
                of a future human civilization fighting for individual freedom.
                On one side is Hash and his “gift”, a technology that can free
                humanity from bondage. Malarian, a high-ranking agent of the
                inter-planetary Centopoly empire, will stop at nothing to
                prevent Hash and his allies from giving humanity its freedom.
                
                Our story will be presented in a series of comics that will be
                released across multiple “seasons.” Fans will be able to collect
                artifacts from the Legends of Cypher universe via NFTs, short
                stories, films, music, art across a variety of mediums.
              </RowText>
            </FirstRowRight>
          </FirstRow>

          <MiddleRow>
            <Title>Legends of Cypher: Overview of Seasons</Title>
          </MiddleRow>

          <RoadMap />

          {/* team start */}
          <GroupTitle>THE LEGENDS OF CYPHER ORIGIN GROUP </GroupTitle>
          <Team />
          {/* team stop */}
        </Cover>
      </Body>
    </>
  )
}

const Body = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;

  width: 100%;
  background: ${CypherTheme.primary};

  height: 100%;
  padding: 16px;
`

const GridImage = styled.img`
  min-height: 250px;
  max-height: 744px;
  height: 100%;
  max-width: 723px;
  width: 100%;
  object-fit: cover;
`

const Cover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FirstRow = styled.div`
  display: grid;
  grid-template-areas: "FirstLeft FirstRight";
  grid-template-columns: 420px auto;
  align-items: center;
  justify-content: center;
  margin: 64px auto;
  grid-gap: 40px;
  gap: 40px;
  max-width: 1300px;
  width: 100%;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 16px auto;
    grid-template-areas:
      "FirstLeft"
      "FirstRight";
  }
`
const FirstRowLeft = styled.div`
  grid-area: FirstLeft;
`

const MiddleRow = styled.div`
  width: 100%;
  margin: 32px 0;
`
const FirstRowRight = styled.div`
  grid-area: FirstRight;
`
const RowText = styled(Body1)`
  margin: 16px 0;
  color: ${CypherTheme.white};
`

const Title = styled(Header3)`
  color: ${CypherTheme.white};
  margin: 8px 0;
  text-align: center;
`
const GroupTitle = styled(Header3)`
  color: ${CypherTheme.white};
  margin: 80px 0 40px 0;
  text-align: center;
  @media only screen and (max-width: 650px) {
    margin: 56px 0 24px 0;
  }
`

export default React.memo(About)
