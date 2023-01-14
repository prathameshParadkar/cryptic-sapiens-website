import React from 'react'
import styled from 'styled-components'
import IntroSlider from './IntroSlider1'
import {NftData} from '../Data/NftData'
import IntroSlider1 from './IntroSlider1'
import IntroSlider2 from './IntroSlider2'
import { delay, motion } from 'framer-motion'
import Aos from 'aos'
import "aos/dist/aos.css"
import {screens} from '../Data/ScreenSizes'

const Container = styled(motion.div).attrs(props => ({
    className : props.className,
}))`
    height: 120vh;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    margin-top: 100px;
    @media ${screens.mobile}, ${screens.tablet} {
        flex-wrap: nowrap;
        height: 195vh;
    }
`

const BlueDiv = styled.div`
    width: 55vw;
    height: 50%;
    box-sizing: border-box;
    padding-left: 6rem;
    padding-top: 0.8rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border-radius: 47px;
    @media ${screens.mobile}, ${screens.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40%;
    }
`

const IntroText = styled.h1`
    top: 2.5%;
    position: absolute;
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 8.5vw;
    letter-spacing: 0.015em;
    z-index: 3;
    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media ${screens.mobile}, ${screens.tablet} {
        left:15vw;
    }
`

const IntroPara = styled.p`
    position: absolute;
    
    width: 47%;
    top: 24%;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 1.7vw;
    line-height: 1.7vw;
    z-index: 2;
    color: #557371;

    @media ${screens.mobile}, ${screens.tablet} {
        left: 15%;
        font-size: 5vw;
        top: 13vh;
        width: 70vw;
        line-height: 5vw;
    }
`

const SideBox = styled.div`
    width: 50%;
    height: 41%;
    box-sizing: border-box;
    padding-left: 6rem;
    padding-top: 0.8rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const SideBoxText = styled.h1`

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 3vw;

    display: flex;
    align-items: center;
    letter-spacing: 0.015em;

    color: #59B5BA;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    @media ${screens.mobile}{
        position: absolute;
        top: 78%;
        left: 15%;
        font-size: 7vw;
    }
    @media ${screens.tablet}{
        position: absolute;
        top: 82%;
        left: 15%;
        font-size: 7vw;
    }
`

const SideBoxPara = styled.p`
    position: relative;
    width: 100%;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 1.7vw;

    @media ${screens.mobile}{
        position: absolute;
        top: 82%;
        left: 15%;
        width: 80%;
        font-size: 4vw;
    }
    @media ${screens.tablet} {
        position: absolute;
        top: 87%;
        left: 15%;
        width: 80%;
        font-size: 4vw;
        width: 78%;
    }
    color: #557371;

`
const SideBoxBtn = styled.button`
    position: relative;
    width: 100%;
    height: 15%;


    background: linear-gradient(180deg, #F5F5F5 0%, #C4F5F5 120.37%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 72px;

    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3vw;
    border: none;
    @media ${screens.mobile} {
        position: absolute;
        top: 89%;
        left: 10%;
        width: 80%;
        height: 3%;
        font-size: 3vw;
    }

    @media ${screens.tablet} {
        position: absolute;
        width: 85%;
        top: 96%;
        left: 10%;
        height: 3%;
        font-size: 3vw;
    }

`

const Sliders = styled.div`
@media ${screens.tablet} {
    position: absolute;
    display: flex;
    top: 23.55%;
    left: 15%;
   width: 80%;
}
@media ${screens.mobile} {
    position: absolute;
    display: flex;
    top: 15%;
    left: 14%;
   width: 80%;
}
`

const BackDiv = styled.div`
    position: absolute;
    width: 85%;
    height: 50%;
  left: 50%;

  transform: translate(-50%, 0);
    z-index: -3;
    background-color: #ABE2F3;
    border-radius: 47px;

    @media ${screens.tablet} {
        height: 40%;
    }
`



export default function Intro(props) {
    React.useEffect(() => {
        Aos.init({duration : 1000})
    }, [])

  return (
    <Container
   
     className="IntroPage">
        <BackDiv>
        </BackDiv>
        
        <Sliders data-aos = {!props.isMobile ? "fade-left" : "fade-up" } 
                style={{display : "flex", marginTop : "7vh"}}>
            <IntroSlider1  />
            <IntroSlider2 />
        </Sliders>
     
        <BlueDiv>
            <IntroText data-aos = {!props.isMobile ? "fade-right" : "fade-up" }>
            INTRODUCTION
            </IntroText>
            
                <IntroPara data-aos = {!props.isMobile ? "fade-right" : "fade-up" }>
                Human evolution is driven by a desire to hunt, survive, collect rare items, explore, and form communities. This has resulted in the creation of diverse cultures around the world. Culture is a fundamental part of our identity and helps us connect with others. The evolved cultures preserved over blockchain using cryptography by "Cryptic Sapiens".
                </IntroPara>
            
        </BlueDiv>

        <SideBox>
            <SideBoxText data-aos = {!props.isMobile ? "fade-right" : "fade-up" }>
            BE A CRYPTIC SAPIEN
            </SideBoxText>
            <SideBoxPara data-aos = {!props.isMobile ? "fade-right" : "fade-up" }>
            Join Cryptic Sapiens if you value cultures, enjoy challenges, have a positive mindset, love travelling, meeting new people, learning, laughing, and sharing experiences.
            </SideBoxPara>
            <SideBoxBtn data-aos = "fade-up">
            Whitepaper
            </SideBoxBtn>
            
        </SideBox>  
        
    </Container>
  )
}
