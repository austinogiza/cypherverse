import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body1, Body4 } from "styles/TextStyles"

const Banner = () => {
  return (
    <Body>
      <Cover>
        <Text>
          Legends of Cypher is now a StoryPrima DAO-incubated project.
        </Text>

        <BannerButton
          href="https://storyprima.io/legends-of-cypher-the-first-storyprima-dao-incubated-project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonText>Info: DAO & Airdrop</ButtonText>
        </BannerButton>
      </Cover>
    </Body>
  )
}

const Body = styled.section`
  background: ${CypherTheme.primary};
  border: 1px solid ${CypherTheme.white};
  min-height: 56px;
  width: 100%;
  padding: 16px;
`
const Cover = styled.div`
  color: ${CypherTheme.white};
  max-width: 1000px;
  margin: 8px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`
const Text = styled(Body1)`
  text-align: center;
`
const BannerButton = styled.a`
  height: 40px;
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
  margin: 8px;
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
const ButtonText = styled(Body4)``
export default Banner
