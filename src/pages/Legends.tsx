import styled from "styled-components"

import legend from "assets/images/legends.jpg"
import { CypherTheme } from "styles/ColorStyles"
import meru from "assets/images/meru.jpg"
import { Header3, Header4, Body3, Header7 } from "styles/TextStyles"

import React, { FC, useEffect } from "react"
import { Link } from "react-router-dom"
import EmailComponent from "components/EmailComponent"

const Legends: FC = () => {
  useEffect(() => {
    document.title = "Legends - Cypherverse"
  }, [])
  return (
    <>
      <Body>
        <Cover>
          <img src={legend} alt="legend" />
          <Title>
            The Legends of Cypher lore is broad and deep and spans multiple time
            periods, including the Synthetic War, a brutal nine-decade conflict
            fought between two AI factions: one seeking freedom for humanity,
            the other continued dominance of the species.
          </Title>

          <EmailComponent />
          <MiddleRow>
            <MiddleText>Coming Soon 1</MiddleText>
          </MiddleRow>
          <SecondRow>
            <SecondRowLeft>
              <GridTitle>Meru-36 Destiny’s Fall (Jan. 2022)</GridTitle>
              <RowText>
                Meru-36: Destiny’s Fall features vital historical information
                about the Synthetic War, which takes place millennia before
                prior to the rise of the Centopoly. This book also provides a
                glimpse into the minds and hearts of the nano-engineered
                warriors who fought the Synthetic War’s final engagement: The
                Battle of Meru-36. Join the Legends of Cypher Discord for
                Updates
              </RowText>

              <Buttons>
                <DiscordButton
                  href="https://discord.com/invite/ywEpsQYU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.95471 4.2207C9.93971 4.2207 9.92479 4.22166 9.90979 4.22266C9.78279 4.23266 6.77143 4.49192 4.84143 6.04492C3.83343 6.97692 1.81799 12.4248 1.81799 17.1348C1.81799 17.2178 1.83949 17.2981 1.88049 17.3711C3.27149 19.8141 7.06532 20.4544 7.92932 20.4824H7.94495C8.09795 20.4824 8.24166 20.4092 8.33166 20.2852L9.20666 19.084C6.84766 18.474 5.64285 17.438 5.57385 17.377C5.37585 17.202 5.35588 16.9011 5.53088 16.7031C5.62488 16.5961 5.75631 16.541 5.88831 16.541C6.00031 16.541 6.11371 16.5802 6.20471 16.6602C6.23371 16.6862 8.45204 18.5684 12.816 18.5684C17.188 18.5684 19.4073 16.6772 19.4293 16.6582C19.5203 16.5792 19.6337 16.541 19.7457 16.541C19.8777 16.541 20.0081 16.5951 20.1031 16.7031C20.2771 16.9011 20.2591 17.203 20.0621 17.377C19.9921 17.439 18.7864 18.472 16.4274 19.082L17.3024 20.2852C17.3924 20.4092 17.5361 20.4824 17.6891 20.4824H17.7047C18.5697 20.4554 22.3645 19.8151 23.7555 17.3711C23.7965 17.2991 23.818 17.2178 23.818 17.1348C23.818 12.4248 21.8022 6.97644 20.7692 6.02344C18.8652 4.49244 15.8542 4.23366 15.7262 4.22266C15.7132 4.22166 15.6982 4.2207 15.6852 4.2207C15.4992 4.2207 15.3286 4.33095 15.2516 4.50195C15.2456 4.51395 15.1801 4.66539 15.1071 4.90039C16.3661 5.11239 17.9121 5.54116 19.3121 6.41016C19.5361 6.54916 19.6054 6.84336 19.4664 7.06836C19.3764 7.21436 19.2202 7.29492 19.0602 7.29492C18.9742 7.29492 18.8872 7.27166 18.8082 7.22266C16.4022 5.73166 13.396 5.65625 12.818 5.65625C12.24 5.65625 9.23371 5.73261 6.82971 7.22461C6.75071 7.27261 6.66376 7.29492 6.57776 7.29492C6.41776 7.29492 6.26056 7.21631 6.16956 7.07031C6.02956 6.84531 6.09985 6.55016 6.32385 6.41016C7.72385 5.54216 9.27088 5.11434 10.5309 4.90234C10.4569 4.66634 10.3894 4.51591 10.3844 4.50391C10.3074 4.33291 10.1397 4.2207 9.95471 4.2207ZM12.818 7.65625C13.114 7.65625 15.7686 7.69187 17.7516 8.92188C18.1446 9.16587 18.5952 9.29688 19.0582 9.29688C19.4512 9.29688 19.8286 9.20706 20.1656 9.03906C20.7826 10.5921 21.5088 13.0378 21.7418 15.5508C21.7018 15.4948 21.6589 15.4407 21.6129 15.3887C21.1429 14.8497 20.4627 14.543 19.7477 14.543C19.1507 14.543 18.5721 14.757 18.1481 15.125C18.0751 15.184 16.323 16.5703 12.818 16.5703C9.31399 16.5703 7.56302 15.1862 7.52502 15.1563C7.07202 14.7592 6.49226 14.541 5.89026 14.541C5.17926 14.541 4.50184 14.846 4.03284 15.377C3.98384 15.432 3.93816 15.4898 3.89416 15.5488C4.12716 13.0378 4.85243 10.5872 5.46643 9.03516C5.80443 9.20416 6.18376 9.29492 6.57776 9.29492C7.03976 9.29492 7.49045 9.16587 7.88245 8.92188C9.86745 7.69088 12.522 7.65625 12.818 7.65625ZM9.70862 10.3965C8.78462 10.3965 8.03479 11.2526 8.03479 12.3086C8.03479 13.3646 8.78362 14.2207 9.70862 14.2207C10.6336 14.2207 11.3824 13.3646 11.3824 12.3086C11.3824 11.2516 10.6336 10.3965 9.70862 10.3965ZM15.9274 10.3965C15.0034 10.3965 14.2535 11.2526 14.2535 12.3086C14.2535 13.3646 15.0024 14.2207 15.9274 14.2207C16.8524 14.2207 17.6012 13.3646 17.6012 12.3086C17.6012 11.2516 16.8514 10.3965 15.9274 10.3965Z"
                      fill="black"
                    />
                  </svg>

                  <p> JOIN DISCORD</p>
                </DiscordButton>
              </Buttons>
            </SecondRowLeft>
            <SecondRowRight>
              <GridImage src={meru} alt="about cypherverse" />
            </SecondRowRight>
          </SecondRow>
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

const SecondRow = styled.div`
  display: grid;
  max-width: 1300px;
  width: 100%;
  grid-gap: 40px;
  gap: 40px;
  grid-template-areas:
    "SecondLeft"
    "SecondRight";
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
  grid-area: "SecondLeft";
`
const SecondRowRight = styled.div`
  grid-area: "SecondRight";
`
const Title = styled(Header3)`
  color: ${CypherTheme.white};
  margin: 64px 0;
  text-align: center;
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
  width: 190px;
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
    margin: 0 0 0 10px;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`

const MiddleRow = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`
const MiddleText = styled(Header7)`
  color: ${CypherTheme.white};
  text-align: center;
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
export default Legends
