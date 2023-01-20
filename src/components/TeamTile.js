import React from 'react'
import styled from 'styled-components'
import { Grid, Paper } from '@mui/material'
import Aos from 'aos'
import "aos/dist/aos.css"
import {screens} from "../Data/ScreenSizes"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Name = styled.p`
margin-top: 10%;
font-family: 'Itim';
font-style: normal;
font-weight: 400;
font-size: 1.7vw;
text-align: center;
@media ${screens.tablet} {
  font-size: 3.5vw;
    }
@media ${screens.mobile} {
  font-size: 5vw;
    }
color: #008C95;

`
const Postion = styled.div`
font-family: 'Itim';
font-style: normal;
font-weight: 400;
font-size: 1.4vw;
text-align: center;
@media ${screens.tablet} {
  font-size: 2.7vw;
    }

    @media ${screens.mobile} {
      font-size: 4.3vw;
    }
color: #008C95;
`
const PhotoDiv = styled.div`
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background: url(${props => props.img});
    background-size: contain;

    @media ${screens.tablet} {
      width: 20vw;
    height: 20vw;
    }
    @media ${screens.mobile} {
      width: 27vw;
    height: 27vw;
    }
`

const Photo = styled.img`
  width: inherit;
  height: inherit;
  
`
export default function TeamTile(props) {

  React.useEffect(() => {
    Aos.init({duration : 1000})
  }, [])

  return (
    <>
    <Container>
    <PhotoDiv img = {props.img}  data-aos = "fade-up">
    </PhotoDiv>
        <Name data-aos = "fade-up">
            {props.name}
        </Name>
        <Postion data-aos = "fade-up">
          {`(${props.position})`}
        </Postion>
    </Container>
    </>
  )
}
