import React, { FC } from "react"
import styled from "styled-components"

import { CypherTheme } from "styles/ColorStyles"

import { GrClose } from "react-icons/gr"
import PDF from "./PDF"

interface ModalProps {
  closeModal: () => void
  showModal: boolean
}
const PDFModal: FC<ModalProps> = (props) => {
  const { closeModal, showModal } = props
  return (
    <>
      {" "}
      {showModal && (
        <>
          <Modal>
            {" "}
            <Body>
              <CloseIcon onClick={closeModal} />
              <Cover>
                <PDF />
              </Cover>
            </Body>
          </Modal>
        </>
      )}
    </>
  )
}
const Modal = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 42;
  background: rgba(255, 255, 255, 0.25);
  padding: 16px;
`
const Body = styled.div`
  position: relative !important;
  z-index: 43;
  height: 500px;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  border-radius: 4px;
  padding: 20px;
  background: ${CypherTheme.modalBG};
  display: flex;
  flex-direction: column;
`
const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CloseIcon = styled(GrClose)`
  width: 24px;
  height: 24px;
  z-index: 99 !important;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 10px;
  path {
    color: ${CypherTheme.white};
    fill: ${CypherTheme.white};
    stroke: ${CypherTheme.white};
  }
`
export default PDFModal
