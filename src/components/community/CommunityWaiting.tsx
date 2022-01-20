import { CypherTheme } from "styles/ColorStyles"

import React, { FC } from "react"

import styled from "styled-components"
import clock from "assets/images/clock.png"
import { Body1 } from "styles/TextStyles"

import Substack from "components/Substack"

const CommunityWaiting: FC = () => {
  return (
    <Body>
      <Cover>
        <ImageComp src={clock} alt="legend" />
        <CoverText>
          Stay tuned for story events, which will pop up for the community and
          may encourage friendly competition among the Factions.
        </CoverText>
      </Cover>
      <Substack />
      {/* <EmailComponent /> */}
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
  max-width: 1020px;
  min-height: 217px;
  width: 100%;
  background: ${CypherTheme.dark};
  border-radius: 0px;
  padding: 44px;

  margin: 40px auto;

  display: grid;
  grid-template-columns: 110px auto;
  grid-gap: 24px;
  gap: 24px;
  color: ${CypherTheme.white};
  align-items: center;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    place-items: center;
  }
`

const ImageComp = styled.img`
  max-height: 132px;
  min-height: 50px;
  height: 100%;
  width: 100%;
  max-width: 132px;
`
const CoverText = styled(Body1)`
  text-align: left;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

export default CommunityWaiting
