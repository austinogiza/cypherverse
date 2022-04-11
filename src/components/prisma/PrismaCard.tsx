import React, { FC } from "react"
import { Body2 } from "styles/TextStyles"
import { CypherTheme } from "styles/ColorStyles"
import styled from "styled-components"
import { Link } from "react-router-dom"

interface CardProps {
  image: string
  page: string
  slug: string
  text: string
  tag: string
  external: boolean
  link: string
}
const PrismaCard: FC<CardProps> = (props) => {
  const { image, slug, page, text, tag, external, link } = props
  return (
    <Body>
      <Cover>
        <CardImage src={image} alt={text} />
        <CardText>{tag}</CardText>
        <DisabledCardButton className="disabled">
          {" "}
          <CardText>{text}</CardText>
        </DisabledCardButton>
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
  max-width: 600px;
  width: 100%;
  min-height: 400px;

  background: ${CypherTheme.dark};

  padding: 16px;
`
const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .disabled {
    cursor: not-allowed;
    background: ${CypherTheme.disabled} !important;
    color: ${CypherTheme.white} !important;
  }
`
const CardImage = styled.img`
  height: 360px;

  width: 100%;
  border-radius: 0px;
  margin: 0 0 16px 0;
`
const CardText = styled(Body2)`
  text-align: center;
  color: ${CypherTheme.white};
`
const CardButton = styled(Link)`
  height: 58px;
  max-width: 340px;
  width: 100%;
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
const DisabledCardButton = styled.a`
  height: 58px;
  max-width: 340px;
  width: 100%;
  margin: 24px 0 0 0;
  background: ${CypherTheme.white};
  outline: none;
  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);
  border-radius: 0px;
  color: ${CypherTheme.white};
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
  max-width: 340px;
  margin: 24px 0 0 0;
  width: 100%;
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
export default PrismaCard
