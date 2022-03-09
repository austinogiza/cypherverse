import React, { FC, MouseEvent, useState, useEffect } from "react"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import logo from "assets/logo.svg"
import { CypherTheme } from "styles/ColorStyles"
import { MdOutlineLogout } from "react-icons/md"
import { Body3, CustomLang } from "styles/TextStyles"

interface NavbarProps {
  toggle?: boolean | any
  color?: any
  activeAccount?: boolean
  currentAccount?: string
  connectWallet?: () => void
  disconnectActiveAccount?: () => void
}

const Navbar: FC<NavbarProps> = (props) => {
  const router = useLocation()

  const {
    connectWallet,
    currentAccount,
    activeAccount,
    disconnectActiveAccount,
  } = props
  const [menu, setMenu] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)

  const [timer, setTimer] = useState<number>(5)

  const handleToggle = (e: MouseEvent<HTMLSpanElement>) => {
    setMenu(!menu)
  }

  useEffect(() => {
    setMenu(false)
  }, [router])

  useEffect(() => {
    if (menu) {
      window.setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 1000)
    } else {
      setLoading(false)
      setTimer(5)
    }
    // if (timer === 0) {
    //   setTimer(8)
    // }
    if (timer <= 0) {
      setTimer(5)
      setLoading(true)
    }
    return () => clearInterval(timer)
  }, [menu, timer])

  return (
    <>
      <Head>
        <Nav>
          <NavLink to="/">
            {router.pathname === "/explore" ? null : (
              <>
                <LogoImage src={logo} alt="cypherverse logo" />
              </>
            )}
          </NavLink>{" "}
          {router.pathname === "/meru-36" ? (
            <>
              {activeAccount ? (
                <>
                  <ConnectWallet onClick={disconnectActiveAccount}>
                    <ConnectText>{`${currentAccount?.slice(
                      0,
                      5
                    )}...${currentAccount?.slice(38)}`}</ConnectText>
                    <DisconnectAccount />
                  </ConnectWallet>
                </>
              ) : (
                <>
                  {" "}
                  <ConnectWallet onClick={connectWallet}>
                    <ConnectText>Connect Wallet</ConnectText>
                  </ConnectWallet>
                </>
              )}
            </>
          ) : (
            <MenuBar onClick={handleToggle}>
              <TopBar toggle={menu} />
              <MiddleBar toggle={menu} />
              <BottomBar toggle={menu} />
            </MenuBar>
          )}
        </Nav>
        <NavMenu toggle={menu}>
          <ul>
            <Link to="/about">
              <li>{loading ? "ABOUT" : <Lang>ABOUT</Lang>}</li>
            </Link>
            <Link to="/legends">
              <li>{loading ? "LEGENDS" : <Lang>LEGENDS</Lang>}</li>
            </Link>
            <Link to="/community">
              <li>{loading ? "COMMUNITY" : <Lang>COMMUNITY</Lang>} </li>
            </Link>
            <Link to="/explore">
              <li>{loading ? "MUSINGS" : <Lang>MUSINGS</Lang>} </li>
            </Link>
          </ul>
        </NavMenu>
      </Head>
    </>
  )
}

const Head = styled.header`
  max-width: 1310px;
  width: 100%;
  margin: 24px auto;
  height: 72px;
  background: "transparent";
`

const NavLink = styled(Link)`
  cursor: pointer;
  width: 156px;
  height: 56px;
  z-index: 41;
  position: relative;

  a {
    width: 156px;
    height: 56px;
  }
`

const LogoImage = styled.img`
  cursor: pointer;
  width: 156px;
  height: 56px;
  z-index: 41;
  position: relative;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: transparent;
`

const MenuBar = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 41;
  /* position: fixed;
top: 48px;
right: 16px; */

  @media only screen and (max-width: 650px) {
    top: 16px;
  }
`
const TopBar = styled.span<NavbarProps>`
  width: 36px;
  cursor: pointer;
  height: 1px;
  background: ${CypherTheme.white};
  margin: 2px 0;
  transform: ${(props) =>
    props.toggle ? "translate(-1px, 4px) rotate(45deg)" : "rotate(0deg)"};
  transition: 0.3s cubic-bezier(0.12, 0.73, 0.69, 0.87);
`
const MiddleBar = styled.span<NavbarProps>`
  width: 36px;
  height: 1px;
  cursor: pointer;
  background: ${CypherTheme.white};
  margin: 2px 0;
  display: ${(props) => (props.toggle ? "none" : "flex")};
  transition: 0.3s cubic-bezier(0.12, 0.73, 0.69, 0.87);
`
const BottomBar = styled.span<NavbarProps>`
  width: 36px;
  cursor: pointer;
  height: 1px;
  background: ${CypherTheme.white};
  margin: 2px 0;
  transition: 0.3s cubic-bezier(0.12, 0.73, 0.69, 0.87);
  transform: ${(props) =>
    props.toggle ? "translate(-1px, -4px) rotate(-45deg)" : "rotate(0deg)"};
`

const NavMenu = styled.div<NavbarProps>`
  width: 100%;
  height: 100%;
  background: ${CypherTheme.dark};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 40;

  transform: ${(props) =>
    props.toggle ? "translateY(0px)" : "translateY(-500%)"};

  ul {
    width: 100%;
    height: 400px;
    max-width: 2000px;

    margin: 0 auto;
    cursor: pointer;

    a {
      cursor: pointer;
    }

    li {
      color: ${CypherTheme.white};
      text-align: center;
      margin: 16px 0;
      font-family: "Atures";
      font-size: 28px;
      line-height: 1.3;
      transition: 0.6s ease-in;
      @media only screen and (max-width: 600px) {
        font-size: 21px;
      }
    }
  }
`

const Lang = styled(CustomLang)``
const ConnectWallet = styled.button`
  height: 48px;
  max-width: 200px;
  width: 100%;
  border-radius: 0px;
  padding: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  background: transparent;
  cursor: pointer;
`
const ConnectText = styled(Body3)`
  color: ${CypherTheme.white};
  font-weight: 600;
`

const DisconnectAccount = styled(MdOutlineLogout)`
  height: 28px;
  width: 28px;
  color: ${CypherTheme.white};
  stroke: ${CypherTheme.white};
  margin: 0 0 0 4px;
`
export default Navbar
