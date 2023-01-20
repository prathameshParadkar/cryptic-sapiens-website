import React from 'react'
import logoPng from '../images/cryptic_Logo _1.png'
import styled from 'styled-components';
import { Link } from 'react-scroll';
import ScrollToTopButton from './ScrollToTopButton';
import {screens} from '../Data/ScreenSizes'
import { motion } from 'framer-motion';
import { HiMenu, HiX } from "react-icons/hi";

const Nav = styled.div`
    position: fixed;
    z-index: 10;
    background-color: #ABE2F3;
    width : 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around ;
    @media ${screens.mobile} {
        justify-content:space-between;
        height: 8vh;
    }
    @media ${screens.tablet} {
        justify-content:space-between;
        height: 7vh;
    }
`;

const Logo = styled.img`
    scale: 0.8;
    padding: 0;
    @media ${screens.mobile} {
        scale: 0.5;
        /* margin-left: -10%; */
    }
    @media ${screens.tablet} {
        scale: 0.5;
        /* margin-left: -10%; */
        
    }
`

const NavLinkWrapper = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media ${screens.mobile} {
        display: none;
    }
    @media ${screens.tablet} {
        display: none;
    }
`

const Breadcrum = styled(HiMenu)`
        align-self: center;
        padding: 5%;
        color : white;
        scale: 1.5;
        cursor: pointer;

        @media ${screens.laptop} {
            display:  none;
        }

`

const NavMenu = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    z-index: 100;
    background-color:#ABE2F3 ;

    @media ${screens.laptop} {
        display: none;
    }
`

const MenuClose = styled(HiX)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 100px;
    width: 5vw;
        align-self: center;
        padding: 5%;
        color : white;
        font-size: 25px;
        cursor: pointer;
`

const NavLinks = styled(Link)`
    text-decoration: none;
    font-family: Itim;
    font-size: 1.7vw;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`

export default function Navbar() {

    const [menu, setMenu] = React.useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth",
        })
    }

    console.log(screens)
    const navStyles = {cursor : "pointer", fontSize : "40px", maxFontSize: "50px", marginTop : "5%"}
  return (
    <Nav>
        <ScrollToTopButton />
        <NavLinkWrapper>
            <NavLinks 
                to="IntroPage"
                duration={500}
                style={{cursor : "pointer"}}
                smooth ={true}
                offset= {-100}
                spy={true}>
                    Intro
            </NavLinks>

            <NavLinks 
                to="VisionPage"
                duration={500}
                style={{cursor : "pointer"}}
                smooth ={true}
                offset= {0}
                spy={true}>
                    Vision
            </NavLinks>
            
            <NavLinks 
                to="UtilityPage"
                duration={500}
                style={{cursor : "pointer"}}
                smooth ={true}
                offset= {-60}
                spy={true}>
                    Utility
            </NavLinks>

        </NavLinkWrapper>
        
        <Logo style={{cursor : "pointer"}} src={logoPng} onClick={scrollToTop}  />
        <Breadcrum onClick={() => { setMenu(true)}}  />
        {menu && (

            <>
                <NavMenu
                as={motion.div}
                animate ={{
                    opacity : [0 , 1]
                }}
                onClick={() => setMenu(false)}>
                <MenuClose style={{scale: "1.5"}}/>

                <NavLinks 
                onClick={() => setMenu(false)}
                to="IntroPage"
                duration={500}
                style={navStyles}
                smooth ={true}
                offset= {-100}
                spy={true}>
                    Intro
            </NavLinks>

            <NavLinks 
            onClick={() => setMenu(false)}
                to="VisionPage"
                duration={500}
                style={navStyles}
                smooth ={true}
                offset= {0}
                spy={true}>
                    Vision
            </NavLinks>
            
            <NavLinks 
            onClick={() => setMenu(false)}
                to="UtilityPage"
                duration={500}
                style={navStyles}
                smooth ={true}
                offset= {-60}
                spy={true}>
                    Utility
            </NavLinks>

            <NavLinks 
            onClick={() => setMenu(false)}
                to="RoadmapPage"
                duration={500}
                style={navStyles}
                smooth ={true}
                offset= {-80}
                spy={true}>
                    Roadmaps
            </NavLinks>

            <NavLinks 
            onClick={() => setMenu(false)}
                to="TeamPage"
                duration={500}
                style={navStyles}
                smooth ={true}
                offset= {-85}
                spy={true}>
                    Team
            </NavLinks>
            
            <NavLinks 
            onClick={() => setMenu(false)}
                to="FaqPage"
                duration={500}
                style={navStyles}
                smooth ={true}
                offset= {-80}
                spy={true}>
                    FAQs
            </NavLinks>
                </NavMenu>
            </>
        )}

        <NavLinkWrapper>
            <NavLinks 
                to="RoadmapPage"
                duration={500}
                style={{cursor : "pointer"}}
                smooth ={true}
                offset= {-80}
                spy={true}>
                    Roadmaps
            </NavLinks>

            <NavLinks 
                to="TeamPage"
                duration={500}
                style={{cursor : "pointer"}}
                smooth ={true}
                offset= {-85}
                spy={true}>
                    Team
            </NavLinks>
            
            <NavLinks 
                to="FaqPage"
                duration={500}
                style={{cursor : "pointer"}}
                smooth ={true}
                offset= {-80}
                spy={true}>
                    FAQs
            </NavLinks>
        </NavLinkWrapper>
    </Nav>
  )
}
