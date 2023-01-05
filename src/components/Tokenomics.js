import React from 'react'
import styled from 'styled-components'
import img1 from "../images/IMG_3634.png"
import img2 from "../images/Ellipse.png"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    margin-top: 120px;
`
const LeftImage = styled.img`
    scale: 0.8;
    position: absolute;
    top: -21%;
    left: -10%;
`

const Text = styled.h1`
    position: absolute;
width: 714px;
height: 114px;
left: 40%;
top:20%;

font-family: 'Jua';
font-style: normal;
font-weight: 400;
font-size: 113px;
line-height: 141px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.015em;

color: rgba(0, 141, 150, 0.65);

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SubText = styled.h3`
    position: absolute;
width: 652px;
height: 211px;
left: 42%;
top:25%;


font-family: 'Itim';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 47px;
display: flex;
align-items: center;
letter-spacing: 0.015em;

color: #007F7F;
`

const Points = styled.ol`
display: flex;
flex-direction: column;
    position: absolute;
    align-items: flex-start;
    justify-content: flex-start;
width: 644px;
height: 363px;
left: 42%;
top:50%;

font-family: 'Itim';
font-style: normal;
font-weight: 400;
font-size: 37px;
letter-spacing: 0.015em;

color: #007F7F;
`

const RightImg = styled.img`
position: absolute;
right: 0;
top: 55%;

`


export default function Tokenomics() {
  return (
    <>
        <Container>
            <LeftImage src={img1}/>
            <Text>
                TOKENOMICS
            </Text>
            <SubText>The "Cryptic Sapiens NFTs" will be the center of the Galaxy around which everything revolves</SubText>
            <Points>
                <li> Total Supply of NFTs: 6999</li>
                <li> Whitelist/Pre sale: 900</li>
                <li> Public sale: 5100</li>
                <li> Reserved: 666</li>
                <li> Team & founders: 333</li>
            </Points>
            <RightImg src={img2} />
            </Container>
    </>
  )
}
