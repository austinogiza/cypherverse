import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import logo from "assets/logo.svg"

import { CypherTheme } from "styles/ColorStyles"
import React, { FC, MouseEvent, useState, useEffect } from "react"

import { CustomLang } from "styles/TextStyles"

interface NavbarProps {
  toggle?: boolean | any
  color?: any
}

const Navbar: FC<NavbarProps> = (props) => {
  const router = useLocation()

  // const { toggle } = props;
  const [menu, setMenu] = useState<boolean>(false)
  const [menuColor, setMenuColor] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const [timer, setTimer] = useState<number>(8)

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

      if (timer === 0) {
        setLoading(true)
      }
    } else {
      setLoading(false)
      setTimer(3)
    }
    if (router.pathname === "/") {
      setMenuColor(true)
    } else {
      setMenuColor(false)
    }
  }, [menu, timer, router])

  return (
    <>
      <Head color={menuColor}>
        <Nav>
          <NavLink to="/">
            {router.pathname === "/" ? null : (
              <>
                <LogoImage src={logo} alt="cypherverse logo" />
              </>
            )}
          </NavLink>

          <MenuBar onClick={handleToggle}>
            <TopBar toggle={menu} />
            <MiddleBar toggle={menu} />
            <BottomBar toggle={menu} />
          </MenuBar>
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
          </ul>
        </NavMenu>
      </Head>
    </>
  )
}

const Head = styled.header<NavbarProps>`
  max-width: 1310px;
  width: 100%;
  margin: 24px auto;
  height: 72px;
  background: transparent;
  @media only screen and (max-width: 1050px) {
    background: ${(props) =>
      props.color ? `${CypherTheme.black}` : "transparent"};
    margin: 0 auto;
  }
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
    props.toggle ? "translateY(0px)" : "translateY(-50000px)"};

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
      transition: 0.4s ease-in;
      @media only screen and (max-width: 600px) {
        font-size: 21px;
      }
    }
  }
`

const Lang = styled(CustomLang)``

export default Navbar
