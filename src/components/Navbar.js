import React from 'react'
import logoPng from '../images/cryptic_Logo _1.png'
import styled from 'styled-components'
import { Link } from 'react-scroll';
import { useRef } from 'react';
import ScrollToTopButton from './ScrollToTopButton';

const Nav = styled.div`
    position: fixed;
    z-index: 10;
    background-color : #ABE2F3;
    width : 100%;
    height: 63px;
    display: flex;
    justify-content: space-around ;
`;

const Logo = styled.img`
    scale: 0.8;
`

const NavLinkWrapper = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const NavLinks = styled(Link)`
    text-decoration: none;
    font-family: Itim;
    font-size: 25px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth",
        })
    }

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
                offset= {-25}
                spy={true}>
                    Utility
            </NavLinks>

        </NavLinkWrapper>
        
        <Logo style={{cursor : "pointer"}} src={logoPng} onClick={scrollToTop}  />
        
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
