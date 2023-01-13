import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Keyframes } from 'styled-components'
import {NftData} from '../Data/NftData'
import {screens} from '../Data/ScreenSizes'


const Container = styled.div`
  position: relative;
  display: flex;
  
  @media ${screens.tablet} {
        margin-left: 5%;
  }
  @media ${screens.mobile} {
    margin-left: 0%;
  }
`

const SliderHero = styled.img`
    width: 10vw;
    height: 25vh;
    min-width: 125px;
    border-radius: 25px;
    margin-bottom: 1.5rem;
    @media ${screens.tablet} {
        width: 30vw;
        height: 28vh;
    }
    @media ${screens.mobile} {
      width: 10vw;
    height: 25vh;
    max-height: 170px;
    }
`

const SliderWrapper = styled.div`

    position: relative;
    /* top: 7%; */
    /* right: 16%; */
    display: flex;
    flex-direction: column;
    height: 45rem;
    margin-top: auto;
    margin-bottom: auto;
    overflow: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
  display: none;
}
`
const SlideTrack = styled.div`
      display: flex;
    flex-direction: column;
    z-index: -2;
`

const BlurDiv1 = styled.div`
   position: absolute;
    width: 10vw;
    height: 30vh;
    min-width: 125px;
    z-index: -1;
    background-color: #ABE2F3;
    top: 0;
    left: 0;
    background: #ABE2F3;
    background: linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%);
    @media ${screens.tablet} {
        width: 30vw;
        height: 28vh;
    }
    @media ${screens.mobile} {
      width: 10vw;
    height: 30vh;
    }


`

const BlurDiv3 = styled.div`
   position: absolute;
    width: 10vw;
    height: 30vh;
    min-width: 125px;
    bottom: 0%;
    left: 0;
    z-index: 1;
    background: linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%);
    transform: rotate(-180deg);
    @media ${screens.tablet} {
        width: 30vw;
        height: 28vh;
        bottom: 15%;
    }
    @media ${screens.mobile} {
      width: 10vw;
      height: 25vh;
      bottom: 0;
    }
`

export default function IntroSlider1(props) {
  return (
    <Container>  
    
        <BlurDiv1></BlurDiv1>
        <BlurDiv3></BlurDiv3>
        <SliderWrapper style={{right : "0", top : "0", marginRight:"5vw", marginTop : "13vh", '@media (max-width : 900px)':  {marginRight : "10vw"}}}>
            <SlideTrack>
              
            {NftData.length > 0 && NftData.map((item, index) => {
              return(
                <SliderHero
                key = {index}
                    src = {item}
                    />
                    )
                  })}
            </SlideTrack>
        </SliderWrapper>
    </Container>
  )
}
