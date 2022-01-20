import React, { FC } from "react"
import styled from "styled-components"
import RoadMapAccordion from "components/about/RoadMapAccordion"
import { data } from "./RoadMapData"

const RoadMap: FC = () => {
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
