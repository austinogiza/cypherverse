import styled from "styled-components";
import error from "assets/images/error.svg";
import { Body1 } from "styles/TextStyles";
import { CypherTheme } from "styles/ColorStyles";
import { Link } from "react-router-dom";

import React, { FC } from "react";
const Error: FC = () => {
  return (
    <Body>
      <Cover>
        <ImageCover src={error} alt="cypherverse 404" />
        <Text>
          Sorry the page you requested could not be found. Please go back to the
          homepage
        </Text>
        <Link to="/">
          <HomeButton>Home</HomeButton>
        </Link>
      </Cover>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cover = styled.div`
  height: 669px;
  max-width: 666px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled(Body1)`
  margin: 16px 0 40px 0;
  color: ${CypherTheme.white};
  text-align: center;
`;

const ImageCover = styled.img`
  max-width: 570px;
  width: 100%;
  height: 100%;
  min-height: 250px;
  max-height: 430px;
`;
const HomeButton = styled.a`
  height: 70px;
  width: 213px;
  border-radius: 3px;
  padding: 8px;
  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);
  border: 1px solid ${CypherTheme.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Atures";
  font-size: 22px;
  color: ${CypherTheme.white};
  line-height: 1.6;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export default Error;
