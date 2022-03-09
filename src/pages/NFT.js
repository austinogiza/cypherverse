import React, { useEffect, useState } from "react"
import WalletModal from "components/model/WalletModal"
import Navbar from "components/Navbar"
import { isMobile } from "react-device-detect"
import { ethers } from "ethers"
import { contractABI, contractAddress } from "contract/contract"
import WalletConnect from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal"
import NFTHero from "components/nft/NftHero"
import NFTBody from "components/nft/NFtBody"
import NFTBottom from "components/nft/NFTBottom"

const NFT = () => {
  const { ethereum } = window

  const [currentAccount, setCurrentAccount] = useState(
    localStorage.getItem("userAddress") || ""
  )
  const [connectedAccount, setConnectedAccount] = useState(false)
  const [open, setOpen] = useState(false)

  const [currentWallet, setCurrentWallet] = useState(
    localStorage.getItem("userWallet") || ""
  )

  //create wallet connect modal
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  })
  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error
    }
  })

  const detectProvider = () => {}

  const connectMetaMask = async () => {
    if (ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      })

      // Boom! This should print out public address once we authorize Metamask.

      localStorage.setItem("userAddress", accounts[0])

      setCurrentAccount(accounts[0])

      setOpen(false)
      setCurrentWallet("metamask")
      localStorage.setItem("walletConnection", "metamask")
    } else {
      alert("Kindly install meta mask")
    }
  }

  const connectWalletConnect = () => {
    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession()
    } else {
      if (QRCodeModal.close()) {
      }
      const account = connector.accounts[0]

      localStorage.setItem("userAddress", account)
      setCurrentAccount(account)
      setOpen(false)
      setCurrentWallet("walletconnect")
      localStorage.setItem("walletConnection", "walletconnect")
    }

    connector.on("connect", (error, payload) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId
      const account = connector.accounts[0]

      localStorage.setItem("userAddress", account)
      setCurrentAccount(account)
      setOpen(false)
      setCurrentWallet("walletconnect")
      localStorage.setItem("walletConnection", "walletconnect")
    })
    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error
      }

      // Get updated accounts and chainId

      const account = connector.accounts[0]

      localStorage.setItem("userAddress", account)
      setCurrentAccount(account)
      setOpen(false)
      setCurrentWallet("walletconnect")
      localStorage.setItem("walletConnection", "walletconnect")
    })
  }

  const checkIfWalletIsConnected = async () => {
    const existingAccount = localStorage.getItem("userAddress")
    console.log(existingAccount, connectedAccount)
    if (existingAccount === null || existingAccount === "") {
      setConnectedAccount(false)
    } else {
      setConnectedAccount(true)
    }
  }
  //open wallet modal
  const openModal = () => {
    setOpen(true)
  }
  //close wallet modal
  const closeModal = () => {
    setOpen(false)
  }

  // const checkNFTs = async () => {
  //   const provider = new ethers.providers.Web3Provider(ethereum)

  //   // const provider = new ethers.providers.Web3Provider(ethereum)

  //   // const contract = new ethers.Contract(contractAddress, contractABI, provider) // create instance

  //   // const balance = await contract.balanceOf(JSON.stringify(currentAccount), 1) // read from the contract
  //   // console.log("balance", balance.toNumber())

  //   const contract = new ethers.Contract(
  //     "0x47c5b8fac7D795F299298075dB6D574EAc479ac1",
  //     contractABI,
  //     provider
  //   ) // create instance
  //   const usrAddress = "0x6E0d1Ba68e0DF6D4C11f46a4C8c7E55C9149164d"
  //   const balance = await contract.balanceOf(usrAddress) // read from the contract
  //   console.log("balance", balance.toNumber())
  // }

  ethereum.on("accountsChanged", function (accounts) {
    // Time to reload your interface with accounts[0]!
  })
  const disconnectAccount = async () => {
    const walletName = localStorage.getItem("walletConnection")

    if (walletName === "walletconnect") {
      //connector.killSession()
      localStorage.removeItem("userAddress")
      localStorage.removeItem("walletConnection")
      setCurrentAccount(null)
      localStorage.removeItem("walletconnect")
      setConnectedAccount(false)
    } else {
      localStorage.removeItem("userAddress")
      localStorage.removeItem("walletConnection")

      setCurrentAccount(null)
      setConnectedAccount(false)
    }
  }

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error
    }

    // Delete connector
    localStorage.removeItem("userAddress")
    localStorage.removeItem("walletConnection")
    setCurrentAccount(null)
    localStorage.removeItem("walletconnect")
    setConnectedAccount(false)
  })

  useEffect(() => {
    if (!isMobile) {
      checkIfWalletIsConnected()
    }

    document.title = "Meru NFT - Cypherverse"
  }, [connectedAccount, currentAccount, isMobile, disconnectAccount])

  return (
    <>
      <Navbar
        activeAccount={connectedAccount}
        currentAccount={currentAccount}
        connectWallet={openModal}
        disconnectActiveAccount={disconnectAccount}
      />
      <WalletModal
        closeModal={closeModal}
        showModal={open}
        connectMetaMask={isMobile ? connectWalletConnect : connectMetaMask}
        connectWalletConnect={connectWalletConnect}
      />
      <NFTHero />
      <NFTBody />
      <NFTBottom />
    </>
  )
}

export default NFT
