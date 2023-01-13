import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import roadmapPic from "../images/roadmap.png"
import Dropdown from './Dropdown'
import {screens} from "../Data/ScreenSizes"


const Container = styled.div.attrs(props => (
    {
        className : props.className
    }
))`
    position:relative ;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const ImgDiv = styled.div`
    z-index: 0;
    position: relative;
    width: 70%;
    height: 150vh;
    background-color: none;
    box-shadow: 0px 22px 38px -6px rgba(0, 0, 0, 0.18);
    border-radius: 47px;
    margin-bottom: 30px;
    overflow: hidden;

    @media ${screens.tablet} {
        width: 85%;
        height: 80vh;
    }
    @media ${screens.mobile} {
        width: 95%;
        height: 80vh;
    }
`
const Text = styled.p`
    z-index: 1;
   position: absolute;
    top: 190px;
    left: -150px;

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    letter-spacing: 0.015em;
    color: rgba(3, 152, 152, 0.8);

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-90deg);
    @media ${screens.tablet} {
        font-size: 60px;
    }
    @media ${screens.mobile} {
        font-size: 30px;
        left: -75px;
        top: 100px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }
`





export default function Roadmap() {
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() =>{
        if (window.innerWidth <= 900){
            setIsMobile(true)
        }
    }, [])

  return (
    <>
    <Container className="RoadmapPage">
        <ImgDiv>
            <Text>CRYPTIC MAP</Text>
            <Dropdown 
                top={!isMobile ? 6 : 6} 
                left={!isMobile ? 37 : 44} 
                index={1}
                title={"Ideation & Art completion"}
            />
            <Dropdown 
                top={!isMobile ? 30 : 20} 
                left={!isMobile ? 8 : 10} 
                index={2}
                title={"NFT launch & web3"}
            />
            <Dropdown 
                top={!isMobile ? 55 : 33} 
                left={!isMobile ? 37 : 47} 
                index={3}
                title={"Web3 & CSB"}
            />
            <Dropdown 
                top={!isMobile ? 75 : 43} 
                left={!isMobile ? 10 : 10} 
                index={4}
                title={"Metaverse"}
            />
            <Dropdown 
                top={!isMobile ? 100 : 55} 
                left={!isMobile ? 37 : 47} 
                index={5}
                title={"Web3 Print Media"}
            />
            <Dropdown 
            top={!isMobile ? 120 : 65} 
            left={!isMobile ? 10 : 10} 
                index={6}
                title={"Web3 investing platform"}
            />
            
            
            <img style={{width : "100%", height : "100%"}} src={roadmapPic} alt="" />
        </ImgDiv>
    </Container>
    
    </>
  )
}

