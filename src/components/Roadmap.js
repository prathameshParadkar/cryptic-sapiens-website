import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import roadmapPic from "../images/roadmap.png"
import Dropdown from './Dropdown'

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

`





export default function Roadmap() {
  return (
    <>
    <Container className="RoadmapPage">
        <ImgDiv>
            <Text>CRYPTIC MAP</Text>
            <Dropdown 
                top={50} 
                left={600} 
                index={1}
                title={"Ideation & Art completion"}
            />
            <Dropdown 
                top={220} 
                left={100} 
                index={2}
                title={"NFT launch & web3"}
            />
            <Dropdown 
                top={400} 
                left={600} 
                index={3}
                title={"Web3 & CSB"}
            />
            <Dropdown 
                top={600} 
                left={100} 
                index={4}
                title={"Metaverse"}
            />
            <Dropdown 
                top={750} 
                left={600} 
                index={5}
                title={"Web3 Print Media"}
            />
            <Dropdown 
                top={900} 
                left={100} 
                index={6}
                title={"Web3 investing platform"}
            />
            
            
            <img style={{width : "100%", height : "100%"}} src={roadmapPic} alt="" />
        </ImgDiv>
    </Container>
    
    </>
  )
}

