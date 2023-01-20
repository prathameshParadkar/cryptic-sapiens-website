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





export default function Roadmap(props) {
    

  return (
    <>
    <Container className="RoadmapPage">
        <ImgDiv>
            <Text>CRYPTIC MAP</Text>
            <Dropdown 
                top={!props.isMobile ? 6 : 6} 
                left={!props.isMobile ? 37 : 44} 
                index={1}
                title={"Ideation & Art completion"}
                para = {[
                    "Ideation phase of the project.",
                    "Recruiting the team.",
                    "Art style and R&D completion.",
                    "Smart Contract development."
                ]}
            />
            <Dropdown 
                top={!props.isMobile ? 30 : 20} 
                left={!props.isMobile ? 8 : 10} 
                index={2}
                title={"NFT launch & web3"}
                para = {[
                    "Web development.",
                    "Rarity distribution planning.",
                    "Smart Contract Deployment.",
                    "Auditing of the smart contract.",
                    'Launching "Cryptic Sapiens" NFTs.'
                ]}
            />
            <Dropdown 
                top={!props.isMobile ? 55 : 33} 
                left={!props.isMobile ? 37 : 47} 
                index={3}
                title={"Web3 & CSB"}
                para = {[
                    "Indutry collaboration identification.",
                    "Manual testing of web 3 platforms with NFT holders.",
                    "NFT Airdrop/launch.",
                    "Web3 platform full integration."
                ]}
            />
            <Dropdown 
                top={!props.isMobile ? 75 : 43} 
                left={!props.isMobile ? 8 : 10} 
                index={4}
                title={"Metaverse"}
                para = {[
                    "NFT bank ideation & Functioning.",
                    "Bank functioning (beta).",
                    "Cryptocurrency launching.",
                    "Integration of cryptocurrency to the web3 & CSB platforms.",
                    "Full Web3 & CSB facilities to the NFT holders."
                ]}
            />
            <Dropdown 
                top={!props.isMobile ? 100 : 55} 
                left={!props.isMobile ? 37 : 47} 
                index={5}
                title={"Web3 Print Media"}
                para = {[
                    "Ideation of the concept.",
                    "Generation of the Print media.",
                    "Identifying contributors.",
                    "Print Media design and release.",
                    "Incentive's to the community participants."
                ]}
            />
            <Dropdown 
            top={!props.isMobile ? 115 : 64.2} 
            left={!props.isMobile ? 8 : 10} 
                index={6}
                title={"Web3 investing platform"}
                para = {[
                    "Metaverse ideation.",
                    "Land acquisition.",
                    "NFTs/Lands launch.",
                    "The land schemes and attributes.",
                    "Development."
                ]}
            />
            
            
            <img style={{width : "100%", height : "100%"}} src={roadmapPic} alt="" />
        </ImgDiv>
    </Container>
    
    </>
  )
}

