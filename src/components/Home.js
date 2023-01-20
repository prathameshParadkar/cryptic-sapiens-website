import React from 'react'
import styled from 'styled-components'
import img1 from '../images/IMG_3285_1.png'
import Navbar from './Navbar'
import {screens} from '../Data/ScreenSizes'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${img1});
    width : 100vw;
    height : 100vh;
    object-fit : fill;
    background-size : 100% 100%;
    /* background-repeat: no-repeat;
    background-size: contain; 
    resize: both; */
    scale : 1;

    @media ${screens.tablet} {
      height : 75vw;
      background-position-y: 5vh;
    }
`


export default function Home() {
  return (
    <>
    <Container >
    <div></div>
    </Container>
     <Navbar />
    </>
  )
}
