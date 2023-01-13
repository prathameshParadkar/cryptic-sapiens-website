import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { UtilityData } from '../../Data/UtilityData'
import UtilTile from './UtilTile'
import Aos from 'aos'
import "aos/dist/aos.css"
import {screens} from '../../Data/ScreenSizes'

const UtilWrapper = styled.div.attrs(props => {
    return (
        {className : props.className}
    )
})`
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 10vh;
    margin-bottom: 20vh;
    align-items: center;
    justify-content: center;
`


const Text = styled.h1`
z-index: 0;
position: absolute;
top: 6%;
right: 11%;

writing-mode:vertical-rl;
font-family: 'Jua';
font-style: normal;
font-weight: 400;
font-size: 29vh;
line-height: 414px;

letter-spacing: 0.015em;

color: rgba(0, 141, 150, 0.65);

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* transform: rotate(90deg); */
    @media ${screens.tablet} {
        right: 0;
        font-size: 25vh;
    }
    @media ${screens.mobile} {
        right: -25%;
        font-size: 25vh;
    }
`

const TileBox = styled.div`
    z-index: 1;
    width: 50%;

    @media ${screens.tablet} {
        width: 70%;
    }
    @media ${screens.mobile} {
        width: 80%;
    }

`

export default function Utility() {
    React.useEffect(() => {
        Aos.init({duration : 1000})
    }, [])
  return (
    <>
    <UtilWrapper className="UtilityPage">
        <TileBox>
            <Grid container>
                {UtilityData.length > 0 && UtilityData.map((util, index) => {
                    return (

                        <Grid data-aos = "fade-up"  item md={4} xs={6} >
                            
                            <UtilTile
                            util = {util}
                            key = {index}
                            />
                            
                        </Grid>
                )
                })}
            </Grid>
        </TileBox>
        <Text data-aos = "fade-left">
            UTILITY
        </Text>
    </UtilWrapper>
    </>
  )
}
