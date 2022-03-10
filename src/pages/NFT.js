import React, { useEffect, useState } from "react"
import WalletModal from "components/model/WalletModal"
import Navbar from "components/Navbar"
import { isMobile } from "react-device-detect"
import { providers } from "ethers"
import { contractABI, contractAddress } from "contract/contract"

import NFTHero from "components/nft/NftHero"
import NFTBody from "components/nft/NFtBody"
import NFTBottom from "components/nft/NFTBottom"
import WalletConnectProvider from "@walletconnect/web3-provider"
const NFT = () => {
  const [currentAccount, setCurrentAccount] = useState(
    localStorage.getItem("userAddress") || ""
  )
  const [connectedAccount, setConnectedAccount] = useState(false)
  const [open, setOpen] = useState(false)

  const [currentWallet, setCurrentWallet] = useState(
    localStorage.getItem("userWallet") || ""
  )

  const detectProvider = () => {
    let provider
    const walletName = localStorage.getItem("walletConnection")

    if (walletName === "walletconnect") {
      const connector = new WalletConnectProvider({
        rpc: {
          1: "https://eth-mainnet.gateway.pokt.network/v1/lb/6229385aabc11f0039cad425",
        },
        bridge: "https://bridge.walletconnect.org",
      })
      const web3Provider = new providers.Web3Provider(connector)
      let provider = web3Provider
      return provider
    } else if (walletName === "metamask") {
      const { ethereum } = window
      let provider = ethereum
      return provider
    }
    return provider
  }

  //create wallet connect modal
  const connector = new WalletConnectProvider({
    rpc: {
      1: "https://eth-mainnet.gateway.pokt.network/v1/lb/6229385aabc11f0039cad425",
    },
    bridge: "https://bridge.walletconnect.org",
  })
  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error
    }
  })

  const connectMetaMask = async () => {
    const { ethereum } = window
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

  const connectWalletConnect = async () => {
    // Check if connection is already established

    const connector = new WalletConnectProvider({
      rpc: {
        1: "https://eth-mainnet.gateway.pokt.network/v1/lb/6229385aabc11f0039cad425",
      },
      bridge: "https://bridge.walletconnect.org",
    })

    //  Enable session (triggers QR Code modal)
    console.log(connector.qrcodeModal)
    await connector.enable()

    connector.on("accountsChanged", (accounts) => {
      console.log(accounts)

      //   // Get updated accounts and chainId

      const account = connector.accounts[0]

      localStorage.setItem("userAddress", account)
      setCurrentAccount(account)
      setOpen(false)
      setCurrentWallet("walletconnect")
      localStorage.setItem("walletConnection", "walletconnect")
    })

    connector.on("connect", (code, reason) => {
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

  connector.on("disconnect", (code, reason) => {
    console.log(code, reason)
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
      <NFTBottom activeAccount={connectedAccount} />
    </>
  )
}

export default NFT
