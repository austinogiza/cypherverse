import React, { FC } from "react"
import styled from "styled-components"
import TurnIndex from "./turnjs"
interface BookProps {
  showModal?: boolean
}
const BookModal: FC<BookProps> = (props) => {
  const { showModal } = props
  return (
    <>
      {" "}
      {showModal && (
        <>
          <Body>
            <Cover>
              <TurnIndex />
            </Cover>
          </Body>
        </>
      )}
    </>
  )
}
const Body = styled.div`
  width: 100%;
  height: 100%;
`
const Cover = styled.div``
export default BookModal
