import styled from "styled-components"
import CommunityHero from "components/community/CommunityHero"
// import CommunityPhase from "components/community/CommunityPhase"
// import CommunityStory from "components/community/CommunityStory"
import CommunityWaiting from "components/community/CommunityWaiting"
import { CypherTheme } from "styles/ColorStyles"

import React, { FC, useEffect } from "react"

const Community: FC = () => {
  useEffect(() => {
    document.title = "Community - Cypherverse"
  }, [])
  return (
    <>
      <Body>
        <CommunityHero />

        <CommunityWaiting />
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

export default React.memo(Community)
