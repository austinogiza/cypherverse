import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body1, Header6 } from "styles/TextStyles"
import meru from "assets/images/meru.jpg"

const PrismaHero = () => {
  return (
    <Body>
      <Cover>
        <SecondRow>
          <SecondRowRight>
            <GridImage src={meru} alt="about cypherverse" />
          </SecondRowRight>
          <SecondRowLeft>
            <GridTitleSecond>About the Lunastus and Sine Ripae</GridTitleSecond>{" "}
            <RowText>
              Commissioned during the eight decade of the Synthetic War, the
              Lunastus was the most advanced starship of its kind. With a normal
              crew complement of 2,000 souls, the Lunastus was a highly capable
              vessel, equally able to launch planet-based assaults and hold its
              own in ship-to-ship space battles.
            </RowText>{" "}
            <RowText>
              The Lunastus was present during the final conflict of the
              Synthetic War: The Battle of Meru-36, and was the only ship to
              survive the engagement. The Lunastus gained notoriety during the
              Great Sundering, a chaotic and dangerous post-war period caused by
              the destruction of the interplanetary Mesh Communications network
              during the Battle of Meru-36.
            </RowText>{" "}
            <RowText>
              Commanded by an ancient TechnoMage (who was assisted by an
              ever-changing crew) the Lunastus roamed the area of space now
              known as the Outback, dispensing aid – and justice – over the
              centuries. The Lunastus’ powerful scoutship, the Sine Ripae was
              the Lunastus’ planetary emissary. The ship transported much-needed
              medicines to plague-ravaged planets and assisted in numerous
              battles against planetary warlords and dictators.
            </RowText>{" "}
            <RowText>
              By the Centopoly era, the Lunastus – and its TechnoMage captain –
              had faded into history and legend.
            </RowText>
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
const GridImage = styled.img`
  min-height: 250px;
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
`

const GridTitleSecond = styled(Header6)`
  color: ${CypherTheme.white};
  margin: 16px 0 24px 0;
  text-align: center;
`

const RowText = styled(Body1)`
  margin: 16px 0;
  color: ${CypherTheme.white};
`
const SecondRow = styled.div`
  max-width: 1300px;
  width: 100%;
`
const SecondRowLeft = styled.div``
const SecondRowRight = styled.div``

export default PrismaHero
