import { CypherTheme } from "styles/ColorStyles";
import { Body1, Header1, Header6 } from "styles/TextStyles";
import styled from "styled-components";
import React, { FC } from "react";
import phase from "assets/images/phase.png";

const CommunityPhase: FC = () => {
  return (
    <Body>
      <Cover>
        <Title>
          You can learn more about our vision for community storytelling
          below...
        </Title>
        <TextTitle>Story Mining... coming soon!</TextTitle>
      </Cover>
      <FirstRow>
        <FirstRowLeft>
          <ImageCover src={phase} alt="about cypherverse" />
        </FirstRowLeft>
        <FirstRowRight>
          <RowText>
            Phase I will enable community members and fans of Cypherverse to
            create their own art to be shared with the community.
          </RowText>

          <RowText>
            Simply upload your stories, art or ideas and as a community, we will
            vote up the work we love the most.
          </RowText>

          <RowText>
            We encourage collaboration and working together in the discord where
            people can share discuss their ideas, share their talent and
            generally collaborate to make the best Cypherverse stories and art
            that the community can imagine.
          </RowText>
        </FirstRowRight>
      </FirstRow>
    </Body>
  );
};

const Body = styled.div`
  margin: 56px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${CypherTheme.primary};
  height: 100%;
  padding: 16px;
  max-width: 1300px;
`;
const Cover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageCover = styled.img`
  max-width: 585px;
  width: 100%;
  height: 100%;
  max-height: 524px;
  min-height: 250px;
`;
const Title = styled(Header6)`
  color: ${CypherTheme.white};
  margin: 16px 0;
  text-align: center;
`;
const TextTitle = styled(Header1)`
  color: ${CypherTheme.white};
  margin: 16px 0;
  text-align: center;
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-areas:
    "FirstLeft"
    "FirstRight";
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 64px 0;
  grid-gap: 40px;
  gap: 40px;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FirstRowLeft = styled.div`
  grid-area: "FirstLeft";
`;
const FirstRowRight = styled.div`
  grid-area: "FirstRight";
`;
const RowText = styled(Body1)`
  margin: 16px 0;
  color: ${CypherTheme.white};
`;
export default CommunityPhase;
