import React, { FC } from "react"
import styled from "styled-components"
import RoadMapAccordion from "components/about/RoadMapAccordion"

const RoadMap: FC = () => {
  const data = [
    {
      id: 1,
      title: "Legends of Cypher Roadmap Highlights: June 2021 – Winter 2022",
      text: "<p> The Legends of Cypher Origin Group has developed a multi-year roadmap that will create a strong foundation for the project, empower community members (Cypherians) to shape its development, deliver unique benefits to early supporters, and tell a rich and compelling story across multiple forms of media.</p><br/>  <p> Below is a partial roadmap of current and planned Legends of Cypher activities. All timelines and outputs are subject to change. Delivery will depend on human/financial resources available to the Origin Group. </p><br/><p>Initial Concept Creation - June 2021 The Legends of Cypher is born and the Origin Group meets for the first time.</p><br/><p>Cypher Universe World Building - Started June 2021 The major characters, factions, technologies and history of the Cypher Universe begin to take shape. To date, the Origin Group has spent more than 2,500 hours crafting narratives, poetry, short stories, music, art and other project canon.</p>",
    },
    {
      id: 2,
      title: "Welcoming the First Cypherians: December - January 2022",
      text: "<p>Release: Pre-Launch Website and Community Discord Channel:  December 2021</p>Initial Legends of Cypher website released. Discord channel opens.<p>Mint: First Cypherians Citizen’s Badge: January 2022</p><br/>The First Cypherians badge will be a special NFT released to help fund the Legends of Cypher project. This limited-edition collectable will grant holders special privileges, including exclusive NFTs, early access to future mints, behind the scenes content and many other unique benefits.",
    },
    {
      id: 3,
      title: "Phase I Activities: December 2021 - February 2022",
      text: "<p>Content: The Musings of Hash and Malarian: December 2021</p>In these audio recordings (featuring original music) Hash (main protagonist) and Malarian (main antagonist) share their competing philosophies on freedom versus control.<p>Content: A Synthetic War Story: Hammerfall at Meru-36  -  January 2022</p><br/>This short story and historical commentary provides important information about the shape, scope and end of the Synthetic War, a nine-decade battle for humanity’s freedom that took place generations before the major events of the current Legends of Cypher storyline.<p>Content: Legends of Cypher Wiki and Cosmos Timeline  - January 2021</p><br/>Wiki featuring information about the Cypher Universe’s major characters, factions, history and technologies. Over time, Cypherians will contribute to the wiki. A special timeline infographic will also be released featuring information about major historical events in the Cyper Universe.<p>Premiere: The Quest for the Bridge Tech Short Film  - February 2022</p>Short animated film featuring a clash between Hash and Malarian and the beginning of the first Great Quest<p>Community Engagement: Faction Selection Opens to Community - February 2022</p><br/>Cypherians will be able to mint free custom NFT Faction Badges, which will enable them to play a central role in the growth of the Cypher Universe.",
    },
    {
      id: 4,
      title: "Phase II Activities: March – Winter 2022",
      text: "<p>Announcement: Story to Legend Crafting Process – April 2022</p>Origin Group to announce the Story to Legend crafting process, which will help Cypherians develop (and be rewarded for) contributing to Cypher Universe <p>Content: Legends of Cypher: Book One – Spring 2022</p><br/>Book One of the Legends of Cypher graphic novel to be released, which will feature the first community-developed Legends content. (First Cypherian NFT holders will receive a discount on Book One and have the ability to mint a special alternate cover.) <p>Release: Cypherian Card Game – Spring 2022</p>In-universe card game that will live in the digital and physical worlds. Cypherians can order physical card decks which will feature items and individuals from the Cypher Universe. A digital version of the card game will be released that will enable Cypherians to compete for prizes, prestige and more. (First Cypherian NFT  holders will be eligible to purchase a special edition of the card deck featuring custom art.)<p>Mint: Legends of Cypher Faction PFP – Summer/Fall 2022</p> 10,000 PFPs (2,500 for each faction) will be released, an important milestone in the Legends of Cypher project. (First Cypherian NFT  holders will be eligible to mint during an exclusive early-access period.) <p>Release: Legends of Cypher “Old School” RPG – Fall/Winter 2022</p> Pixel “Old School” RPG that will feature an important Legends of Cypher storyline and deliver unique benefits to Cypherians who initially complete the game. (The RPG may feature content exclusively released to First Cypherian NFT holders.)",
    },
  ]
  return (
    <Body>
      {data.map((data) => (
        <RoadMapAccordion title={data.title} text={data.text} key={data.id} />
      ))}
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 16px;
`

export default RoadMap
