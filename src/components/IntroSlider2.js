import React from 'react'
import styled from 'styled-components'
import {NftData2} from '../Data/NftData'
import {screens} from '../Data/ScreenSizes'
import {useLayoutEffect, useRef, useState} from 'react';
import {animate, motion} from 'framer-motion'

const SliderWrapper = styled.div`

    position: relative;
    /* top: 7%; */
    /* right: 16%; */
    display: flex;
    flex-direction: column;
    /* height: 93vh; */
    margin-top: auto;
    margin-bottom: auto;
    overflow: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
  display: none;

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

const SlideTrack = styled.div`
        display: flex;
    flex-direction: column;
    z-index: -2;
`

const BlurDiv4 = styled.div`
   position: absolute;
   width: 10vw;
    height: 27vh;
    bottom: -5%;
    min-width: 125px;
    left: 0;
    z-index: -1;
    background: linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%);
    transform: rotate(-180deg);
    @media ${screens.tablet} {
        width: 32vw;
        height: 29vh;
        bottom: -2%;
    }
    @media ${screens.mobile} {
      width: 13vw;
    height: 27vh;
    }
`



const BlurDiv2 = styled.div`
   position: absolute;
    width: 10vw;
    height: 35vh;
    top: -10%;
    min-width: 125px;
    z-index: -1;
    background-color: #ABE2F3;
    background: linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%);
    @media ${screens.tablet} {
        width: 30vw;
        height: 29vh;
        top: -13%;
    }
    @media ${screens.mobile} {
      width: 10vw;
      height: 25vh;
      top: -5%;
    }
`
const Container = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`

export default function IntroSlider2(props) {
  const ref = useRef(null);
  const [ht, setHt] = React.useState(0)
  useLayoutEffect(() => {
    setHt(ref.current.clientHeight);
  }, []);
  return (
    <Container>  
      <BlurDiv2></BlurDiv2>
      <BlurDiv4></BlurDiv4>

        <SliderWrapper style={{right : "0", top : "0", height : "100vh", marginRight:"5vw"}}>
        <SlideTrack 
              as = {motion.div}

              initial = {{
                y : 0
              }}
              animate ={{
                y: [0, -(ht + 24) * (NftData2.length)]
              }}

            transition = {{
              ease : "linear",
              repeat : Infinity,
              duration : (2 * NftData2.length)
            }}
            >
              
            {NftData2.length >3  && NftData2.map((item, index) => {

                return(
                  <SliderHero
                  ref ={ref}
                  key = {index}
                  src = {item}
                  />
                  )
                
              })}
              <SliderHero
                  ref ={ref}
                  key = {NftData2.length}
                  src = {NftData2[0]}
                  />
                  <SliderHero
                  ref ={ref}
                  key = {NftData2.length + 1 }
                  src = {NftData2[1]}
                  />
                  <SliderHero
                  ref ={ref}
                  key = {NftData2.length + 2}
                  src = {NftData2[2]}
                  />
                </SlideTrack>
        </SliderWrapper>
    </Container>
  )
}
