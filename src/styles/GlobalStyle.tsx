import { createGlobalStyle } from "styled-components"
import { CypherTheme } from "./ColorStyles"

interface NavbarProps {
  color?: any
}

export const GlobalStyle = createGlobalStyle<NavbarProps>`
body {
  overflow-x: hidden;

    background: ${(props) =>
      props.color ? `${CypherTheme.black}` : "#171717"};
}
`
