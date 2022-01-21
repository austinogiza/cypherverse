import React, { FC } from "react"
import devin from "assets/images/devin.png"
import james from "assets/images/james.png"
import blurb from "assets/images/crayonz.jpeg"
import davoice from "assets/images/davoice.jpeg"
import { AiOutlineTwitter } from "react-icons/ai"
import { CypherTheme } from "styles/ColorStyles"
import styled from "styled-components"
import { Header6, Body2 } from "styles/TextStyles"

const Team: FC = () => {
  const data = [
    {
      id: 1,
      name: "Devin Sawyer",
      image: devin,
      twitter: "devinsawyer",
      brief:
        "Former Traditional Finance Executive, Devin has 22 years experience in digital product, sales, design, analytics and creative production. A marketer and ecommerce veteran, Devin's has built multi-million dollar media functions that scale for engagement and growth with large audiences across all Media channels, with a focus on innovation in digital and content. Devin has recently made the transition to a full-time Web3 Founder and Community builder. In addition to co-founding Legends of Cypher, he was an early builder of the Bankless DAO Marketing Guild and more recently has been working at The Defiant, supporting Growth and Leading Partnerships. Check out Devin’s most recent marketing innovation at The Defiant.",
    },
    {
      id: 2,
      name: "Davoice",
      image: davoice,
      twitter: "davoice321",
      brief:
        "Davoice is a proud Sci-Fi nerd (he started writing science fiction stories in elementary school), international best selling non-fiction author, musician, composer and free thinker. (You’ll hear Davoice’s compositions across various Legends of Cypher project outputs.) He has also been an active transmedia storyteller since the mid-2000s and part of the emerging Web3 industry since 2015. Davoice is an NFT OG, playing an early role in major NFT projects such as Axie Infinity. Davoice is also a co-founder and contributing member of several DAOs, including AmpleSense (co-founder), Olympus DAO (core strategic team), Bankless DAO (early active member) and the Phonon DAO.",
    },
    {
      id: 3,
      name: "Crayonz aka Barry",
      image: blurb,
      brief:
        "Writer (MFA). Philosopher (BA). Infantryman and combat vet. Trained arguer. Photographer. Horrible artist. Lover of the mountains and the out-of-doors. New to crypto, but thinks that blockchain might help by nerfing some human tendencies.",
      twitter: "barrytheauthor",
    },
    {
      id: 4,
      name: "James Deveron",
      image: james,
      brief:
        "James Deveron is a professional artist, amateur mountaineer and a life-long philosopher. From a very early age his mind questioned the nature of being, sought psychological insight and gravitated toward wild places. An insatiable desire for learning and the prospect of building fairer, transparent systems led him toward Web3 in late 2016. The past 5 years has seen James blend his love of art and philosophy in to a directorial talent that now guides the visual aspects of the LoC project.",
      twitter: "jamesdeveron",
    },
  ]

  return (
    <>
      <TeamRow>
        {data.map((team) => (
          <TeamBody key={team.id}>
            <TeamPhoto src={team.image} alt={team.name} />
            <TeamCover>
              <TeamName>{team.name}</TeamName>
              <TeamSocial>
                <TwitterIcon />{" "}
                <TwitterLink
                  href={`https://twitter.com/${team.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{team.twitter}
                </TwitterLink>
              </TeamSocial>
              <TeamBrief>{team.brief}</TeamBrief>
            </TeamCover>
          </TeamBody>
        ))}
      </TeamRow>
    </>
  )
}

export default Team

const TeamRow = styled.div`
  min-height: 300px;

  max-width: 1288px;
  width: 100%;

  margin: 40px auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
`
const TeamBody = styled.div`
  width: 100%;
  max-width: 1300px;

  display: grid;
  grid-template-columns: 1.5fr 5fr;
  margin: 16px auto;
  grid-gap: 16px;
  gap: 16px;
  align-items: center;

  color: ${CypherTheme.white};
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 8px auto;

    grid-gap: 4px;
    gap: 4px;
  }
`
const TeamPhoto = styled.img`
  margin: 0 0 24px 0;
  max-width: 400px;
  width: 100%;
  height: 100%;
  max-height: 350px;
  min-height: 250px;
  object-fit: contain;
  @media only screen and (max-width: 650px) {
    max-width: 600px;
    max-height: 450px;
  }
`

const TeamCover = styled.div`
  display: flex;
  flex-direction: column;
`
const TeamName = styled(Header6)`
  color: ${CypherTheme.white};
  margin: 24px 0 8px 0;
`
const TeamSocial = styled.div`
  color: ${CypherTheme.white};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const TwitterIcon = styled(AiOutlineTwitter)`
  color: ${CypherTheme.white};
  height: 24px;
  width: 24px;
`
const TwitterLink = styled.a`
  font-family: "Atures";
  font-size: 21px;
  line-height: 1.6;
  margin: 0 0 0 8px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const TeamBrief = styled(Body2)`
  margin: 8px 0;
`
