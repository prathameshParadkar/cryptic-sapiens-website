import React from 'react'
import styled from 'styled-components'
import img1 from "../images/IMG_3634.png"
import img11 from "../images/IMG_36342.png"
import img2 from "../images/Ellipse.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import {screens} from '../Data/ScreenSizes'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    margin-top: 120px;
`
const LeftImage = styled.img`
    width : 42vw;
    height: 100vh;
    min-width: 500px;
    position: absolute;
    @media ${screens.tablet} {
        width : 70vw;
        height: 50vh;
        left: 15%;
    }
    @media ${screens.mobile} {
        width : 70vw;
        height: 40vh;
        min-width: 0;
        left: 15%;
    }
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
    font-size: 8vw;
    line-height: 8vw;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.015em;

    color: rgba(0, 141, 150, 0.65);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media ${screens.tablet} {
        left: 20%;
        top:50%;
        font-size: 10vw;
    }
    @media ${screens.mobile} {
        left: 6%;
        top:38%;
        font-size: 15vw;
    }
`

const SubText = styled.h3`
    position: absolute;
    width: 652px;
    height: 211px;
    left: 42%;
    top:25vh;


    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 2vw;
    line-height: 2vw;
    display: flex;
    align-items: center;
    letter-spacing: 0.015em;

    color: #007F7F;

    @media ${screens.tablet} {
        width: 65%;
        height: 114px;
        left: 20%;
        top:56%;
        font-size: 3.5vw;
        line-height: 3.5vw;
    }
    @media ${screens.mobile} {
        width: 90%;
        height: 114px;
        left: 10%;
        top:47%;
        font-size: 7vw;
        line-height: 7vw;
    }
    
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
top:50vh;

font-family: 'Itim';
font-style: normal;
font-weight: 400;
font-size: 2.4vw;
letter-spacing: 0.015em;

color: #007F7F;
@media ${screens.tablet} {
        width: 67%;
        height: 114px;
        left: 20%;
        top:68%;
        font-size: 5vw;
        line-height: 5vw;
    }
@media ${screens.mobile} {
        width: 90%;
        height: 114px;
        left: 5%;
        top:65%;
        font-size: 7vw;
        line-height: 7vw;
    }
`

const RightImg = styled.img`
width: 10vw;
height: 42vh;
position: absolute;
right: 0;
top: 55%;
@media ${screens.tablet} {
        width: 20vw;
        height: 27vh;
        top: 75%;
    }
    @media ${screens.mobile} {
        width: 20vw;
        height: 23vh;
        top: 80%;
    }
`


export default function Tokenomics(props) {
    const [smallImg, setSmallImg] = React.useState(false)

    React.useEffect(() => {
        Aos.init({duration : 1000})
        if (window.innerWidth <= 900){
            setSmallImg(true)
        }
    }, [])
  return (
    <>
        <Container>
            <LeftImage data-aos = {!props.isMobile ? "fade-right" : "fade-up" } src={!smallImg ? img1 : img11}/>
            <Text data-aos = {!props.isMobile ? "fade-left" : "fade-up" }>
                TOKENOMICS
            </Text>
            <SubText data-aos = {!props.isMobile ? "fade-left" : "fade-up" }>The "Cryptic Sapiens NFTs" will be the center of the Galaxy around which everything revolves</SubText>
            <Points>
                <li data-aos = "fade-up"> Total Supply of NFTs: 6999</li>
                <li data-aos = "fade-up"> Whitelist/Pre sale: 900</li>
                <li data-aos = "fade-up"> Public sale: 5100</li>
                <li data-aos = "fade-up"> Reserved: 666</li>
                <li data-aos = "fade-up"> Team & founders: 333</li>
            </Points>
            <RightImg data-aos = "fade-left" src={img2} />
            </Container>
    </>
  )
}
