import { CypherTheme } from "styles/ColorStyles"
import { Body3, Header6 } from "styles/TextStyles"
import React, { FC, useRef, useState } from "react"
import styled from "styled-components"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

interface AccordionProps {
  text: string
  title: string
}

interface HeightProps {
  height: boolean | any
}
const RoadMapAccordion: FC<AccordionProps> = (props) => {
  const { title, text } = props

  const [height, setHeight] = useState<string | boolean>("0px")
  const [active, setActive] = useState<boolean>(false)
  const [iconRotate, setIconRotate] = useState<boolean>(false)
  const content = useRef<any>(null)

  const toggleAccordion = () => {
    setActive(!active)
    setHeight(active === false ? `${content.current.scrollHeight}px` : "0px")
    setIconRotate(!iconRotate)
  }

  return (
    <Body>
      <AccordionGrid>
        <MapLeft>
          <TopBody />
          <PoleBody height={height} />
        </MapLeft>
        <MapRight>
          <AccordionTitle
            className={`${active ? "active" : ""}`}
            onClick={toggleAccordion}
          >
            <TitleText>{title}</TitleText>
            {iconRotate ? <UpIcon /> : <DownIcon />}
          </AccordionTitle>
          <AccordionText height={height} ref={content}>
            <TextWords dangerouslySetInnerHTML={{ __html: text }} />
          </AccordionText>
        </MapRight>
      </AccordionGrid>
    </Body>
  )
}

const Body = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 32px auto;
`

const AccordionGrid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  width: 100%;
  height: 100%;
  grid-gap: 32px;
  justify-content: flex-start;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const MapLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`
const TopBody = styled.div`
  height: 30px;
  width: 30px;
  left: 0px;
  top: 9px;
  border-radius: 50%;
  background: ${CypherTheme.white};
`
const PoleBody = styled.div<HeightProps>`
  height: ${(props) => (props.height ? props.height : "0px")};
  max-height: ${(props) => (props.height ? props.height : "0px")};
  transition: max-height 0.6s ease-in;
  width: 8px;
  background: ${CypherTheme.white};
  margin: 16px 0;
`

const MapRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${CypherTheme.white};
`
const AccordionTitle = styled.button`
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  color: ${CypherTheme.white};
  height: 32px;
  text-align: left;

  @media only screen and (max-width: 800px) {
    min-height: 32px;

    margin: 0 0 16px 0;
  }
`
const TitleText = styled(Header6)``
const AccordionText = styled.div<HeightProps>`
  overflow: hidden;
  height: ${(props) => (props.height ? props.height : "0px")};
  max-height: ${(props) => (props.height ? props.height : "0px")};
  transition: max-height 0.6s ease-in;
  margin: 16px 0;

  p {
    margin: 6px 0;
  }
`
const TextWords = styled(Body3)``

const DownIcon = styled(BsChevronDown)`
  color: ${CypherTheme.white};
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin: 0 16px;
  transition: all 0.6s ease-in;
`
const UpIcon = styled(BsChevronUp)`
  color: ${CypherTheme.white};
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin: 0 16px;
  transition: all 0.6s ease-in;
`

export default RoadMapAccordion
