import React, { FC } from "react"

import { CypherTheme } from "styles/ColorStyles"
import styled from "styled-components"
import { Link } from "react-router-dom"

interface CardProps {
  image: string
  page: string
  slug: string
  external: boolean
}
const NFTCard: FC<CardProps> = (props) => {
  const { image, slug, page, external } = props
  return (
    <Body>
      <Cover>
        <CardImage src={image} />
        {external ? (
          <>
            <ExternalCardButton
              target="_blank"
              rel="noopener noreferrer"
              href={`${slug}`}
            >
              <p>{page}</p>
            </ExternalCardButton>
          </>
        ) : (
          <>
            {" "}
            <CardButton to={`${slug}`}>
              <p>{page}</p>
            </CardButton>
          </>
        )}
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  max-width: 640px;
  width: 100%;
  height: 100%;
  min-height: 550px;
  max-height: 630px !important;
  background: ${CypherTheme.dark};
  padding: 12px;
`
const Cover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardImage = styled.img`
  min-height: 258px;
  max-height: 400px !important;
  height: 100%;

  max-width: 400px;
  width: 100%;
  border-radius: 0px;
  /* margin: 0 0 16px 0; */
`

const CardButton = styled(Link)`
  height: 58px;
  width: 190px;
  margin: 24px 0 0 0;
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

const ExternalCardButton = styled.a`
  height: 58px;
  width: 190px;
  margin: 24px 0 0 0;
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
export default NFTCard
