import React from "react"
import styled from "styled-components"
import walletconnect from "assets/walletconnect.png"
import metamask from "assets/metamask.png"
import { CypherTheme } from "styles/ColorStyles"
import { Body3, Body4 } from "styles/TextStyles"
import { GrClose } from "react-icons/gr"
const WalletModal = ({
  closeModal,
  showModal,
  connectMetaMask,
  connectWalletConnect,
}) => {
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
                <Title>Select a Wallet to Connect to Legends of Cypher</Title>

                <Wallets>
                  <WalletsWrapper
                    className="metamask"
                    onClick={connectMetaMask}
                  >
                    <WalletText>Metamask</WalletText>{" "}
                    <WalletIcon src={metamask} />
                  </WalletsWrapper>{" "}
                  <WalletsWrapper
                    className="walletconnect"
                    onClick={connectWalletConnect}
                  >
                    <WalletText>Wallet Connect</WalletText>{" "}
                    <WalletIcon src={walletconnect} />
                  </WalletsWrapper>
                </Wallets>
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
  position: relative;
  z-index: 43;
  height: 300px;
  max-width: 459px;
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
const Title = styled(Body4)`
  font-weight: 600;
  margin: 28px 0 36px 0;
  color: ${CypherTheme.white};
  text-align: center;
`
const Wallets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .metamask {
    /* border: 2px solid ${CypherTheme.orangeDark}; */
    :hover {
      box-shadow: ${CypherTheme.orangeDark} 0px 4px 14px,
        ${CypherTheme.orangeDark} 0px 0.5px 1.7px;
    }
  }
  .walletconnect {
    /* border: 2px solid ${CypherTheme.blueLight}; */
    :hover {
      box-shadow: ${CypherTheme.blueLight} 0px 4px 14px,
        ${CypherTheme.blue} 0px 0.5px 1.7px;
    }
  }
`
const WalletsWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  max-width: 419px;
  height: 48px;
  width: 100%;
  background: rgba(18, 18, 20, 0.75);

  border: 1px solid rgba(249, 249, 249, 0.5);
  border-radius: 100px;
  margin: 16px 0;
`
const WalletText = styled(Body3)`
  color: rgba(249, 249, 249, 0.5);
`
const WalletIcon = styled.img`
  width: 24px;
  height: 24px;
`
const CloseIcon = styled(GrClose)`
  width: 24px;
  height: 24px;

  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  path {
    color: ${CypherTheme.white};
    fill: ${CypherTheme.white};
    stroke: ${CypherTheme.white};
  }
`
export default WalletModal
