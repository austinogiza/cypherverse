import styled from "styled-components"

import legend from "assets/images/legends.jpg"
import { CypherTheme } from "styles/ColorStyles"
import { Header3, Body3 } from "styles/TextStyles"

import React, { FC } from "react"

const NFTHero: FC = () => {
  return (
    <>
      <Body>
        <Cover>
          <img src={legend} alt="legend" />
          <Title>About Meru-36: Destiny’s Fall</Title>
          <RowText>
            With its AI allies, humanity settled the Cosmos. This period, known
            as the Great Diaspora era, was a time of peace and prosperity. But
            progress came at a cost: humankind became too reliant on AI and lost
            its freedom to its machine overseers. But one group of machines
            decided to fight back. <br /> These AIs, along with their human and
            post-human allies, fought the nine-decade “Synthetic War”. Meru-36:
            Destiny’s Fall tells the tale of the war and its final
            Cosmos-changing battle, which contributed to the rise of the
            Centopoly empire.
          </RowText>
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

const RowText = styled(Body3)`
  margin: 16px 0;
  color: ${CypherTheme.white};
  text-align: left;
`

const Title = styled(Header3)`
  color: ${CypherTheme.white};
  margin: 64px 0 16px 0;
  text-align: center;
  @media only screen and (max-width: 700px) {
    text-align: left;
  }
`

export default NFTHero
