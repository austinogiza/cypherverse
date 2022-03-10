import styled from "styled-components"

import legend from "assets/images/legends.jpg"
import { CypherTheme } from "styles/ColorStyles"
import meru from "assets/images/meru.jpg"
import orb from "assets/images/orb.png"
import central from "assets/images/central.png"
import { Header3, Header4, Body3, Header7, Body1 } from "styles/TextStyles"

import React, { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Substack from "components/Substack"
import PDFModal from "components/pdf/PDFModal"

const Legends: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  useEffect(() => {
    document.title = "Legends - Cypherverse"
  }, [])

  const closeModal = () => {
    setOpen(false)
  }
  return (
    <>
      <PDFModal closeModal={closeModal} showModal={open} />
      <Body>
        <Cover>
          <img src={legend} alt="legend" />
          <TopCover>
            <Title>Legends of Cypher Lore</Title>
            <MiddleText>
              Legends of Cypher is a multimedia project that tells the story of
              a future human civilization fighting for individual freedom. On
              one side is Hash and his “gift”, a technology that can free
              humanity from bondage. Malarian, a high-ranking agent of the
              inter-planetary Centopoly empire, will stop at nothing to prevent
              Hash and his allies from giving humanity its freedom. Our story
              will be presented in a series of comics that will be released
              across multiple “seasons.” Below you'll find currently released
              lore from the Legends of Cypher universe. In the future we will
              release the Legends of Cypher Wiki, which will feature additional
              lore developed by the Origin Group and the community.
            </MiddleText>
          </TopCover>
          <SecondRow>
            <SecondRowLeft>
              <GridTitle>Meru-36: Destiny’s Fall (Feb. 2022)</GridTitle>
              <RowText>
                Meru-36: Destiny’s Fall features vital historical information
                about the Synthetic War, which takes place millennia prior to
                the rise of the Centopoly. The book also provides a glimpse into
                the minds and hearts of the nano-engineered warriors who fought
                the Synthetic War’s final engagement: The Battle of Meru-36.
              </RowText>

              <Buttons>
                {/* <DiscordButton onClick={openModal}>
                  <p>READ BOOK FOR FREE</p>
                </DiscordButton>{" "} */}
                <DiscordButton
                  href="https://legendsofcypherpdf.netlify.app/deploy/meru-36-web.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>READ BOOK FOR FREE</p>
                </DiscordButton>{" "}
                <TwitterButton to="/meru-36">
                  <p>BUY MERU-36 NFT </p>
                </TwitterButton>
              </Buttons>
            </SecondRowLeft>
            <SecondRowRight>
              <GridImage src={meru} alt="about cypherverse" />
            </SecondRowRight>
          </SecondRow>{" "}
          <MiddleRow>
            <MiddleHeader>Freedom and Control</MiddleHeader>
            <MiddleText>
              Listen to the philosophies of Hash of the Cypherians and Malarian
              of the Centopoly.
            </MiddleText>
            <MiddleButton to="/explore">
              <p>Musings of Hash and Malarian</p>
            </MiddleButton>
          </MiddleRow>
          <SecondRow>
            <SecondRowLeft>
              <RowText>
                Freedom is not choosing between ‘this and that’. Freedom is
                creating your own options.
              </RowText>
            </SecondRowLeft>
            <SecondRowRight>
              <GridImage src={orb} alt="about cypherverse" />
            </SecondRowRight>
          </SecondRow>{" "}
          <FirstRow>
            <FirstRowLeft>
              <GridImage src={central} alt="about cypherverse" />
            </FirstRowLeft>
            <FirstRowRight>
              <RowText>
                Duty is the highest calling for any Centopolite. If all
                individuals make this their focus, then they are assuring the
                future of the collective.
              </RowText>{" "}
            </FirstRowRight>
          </FirstRow>
          <Substack />
          <CosmolBottom>
            <Link to="/translator">
              <CosmolBox>Cosmol Translator</CosmolBox>
            </Link>
          </CosmolBottom>
        </Cover>
      </Body>
    </>
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

const TopCover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 650px) {
    align-items: flex-start;
  }
`
const GridImage = styled.img`
  min-height: 250px;
  max-height: 744px;
  height: 100%;
  max-width: 520px;
  width: 100%;
  /* object-fit: cover; */
`

const GridTitle = styled(Header4)`
  color: ${CypherTheme.white};
  margin: 8px 0;
  text-align: left;
`
const RowText = styled(Body3)`
  margin: 16px 0;
  color: ${CypherTheme.white};
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
const SecondRow = styled.div`
  display: grid;
  max-width: 1300px;
  width: 100%;
  grid-gap: 40px;
  gap: 40px;
  grid-template-areas: "SecondLeft SecondRight";
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 64px auto;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "SecondRight"
      "SecondLeft";
    margin: 16px auto;
  }
`
const SecondRowLeft = styled.div`
  grid-area: SecondLeft;
`
const SecondRowRight = styled.div`
  grid-area: SecondRight;
`
const Title = styled(Header3)`
  color: ${CypherTheme.white};
  margin: 64px 0;
  text-align: center;
  @media only screen and (max-width: 700px) {
    text-align: left;
    margin: 32px 0 8px 0;
  }
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
const DiscordButton = styled.a`
  height: 58px;
  width: 230px;
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
  border: none;
  line-height: 1.2;
  :hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  p {
    margin: 0;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`

const MiddleRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  min-height: 400px;
  @media only screen and (max-width: 650px) {
    height: 250px;
  }
`
const MiddleText = styled(Body1)`
  color: ${CypherTheme.white};
  text-align: center;
  margin: 8px 0 32px 0;
  @media only screen and (max-width: 650px) {
    text-align: left;
  }
`
const MiddleHeader = styled(Header7)`
  color: ${CypherTheme.white};
  text-align: center;
`
const MiddleButton = styled(Link)`
  height: 58px;
  width: 370px;
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
    margin: 0;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`
const CosmolBottom = styled.div`
  width: 100%;
  height: 60px;
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const CosmolBox = styled.div`
  max-width: 434px;
  width: 100%;
  /* background: ${CypherTheme.dark}; */
  opacity: 0.2;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: #949494;
  font-family: "CUSTOM LANG";
  font-size: 28px;
  line-height: 1.3;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 21px;
  }
`
const TwitterButton = styled(Link)`
  height: 58px;
  width: 220px;
  background: ${CypherTheme.primary};
  border: 1px solid ${CypherTheme.white};
  outline: none;
  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);
  border-radius: 0px;
  color: ${CypherTheme.white};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 40px;
  line-height: 1.2;
  :hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  p {
    margin: 0;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`
export default Legends
