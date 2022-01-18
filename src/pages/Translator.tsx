import TranslatorBox from "components/translator/TranslatorBox"
import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Header7, Body3 } from "styles/TextStyles"

const Translator = () => {
  return (
    <Body>
      <Cover>
        <Title>
          <TitleText>Cosmol Translator</TitleText>
          <TitleBodyText>A translator from English to Cosmol </TitleBodyText>
        </Title>
        <TranslatorBox />
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Cover = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  width: 100%;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  color: ${CypherTheme.white};
`
const TitleText = styled(Header7)`
  margin: 8px 0;
`
const TitleBodyText = styled(Body3)`
  margin: 0;
`
export default React.memo(Translator)
