import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { UtilityData } from '../../Data/UtilityData'
import UtilTile from './UtilTile'

const UtilWrapper = styled.div.attrs(props => {
    return (
        {className : props.className}
    )
})`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    margin-top: 50px;
    margin-bottom: 220px;
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
font-size: 225px;
line-height: 414px;

letter-spacing: 0.015em;

color: rgba(0, 141, 150, 0.65);

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* transform: rotate(90deg); */
`

const TileBox = styled.div`
    z-index: 1;
    height: 90vh;
    width: 50%;

`

export default function Utility() {
  return (
    <>
    <UtilWrapper className="UtilityPage">
        <TileBox>
            <Grid container>
                {UtilityData.length > 0 && UtilityData.map((util, index) => {
                    return (

                        <Grid  item md={4} xs={6} >
                            
                            <UtilTile
                            util = {util}
                            key = {index}
                            />
                            
                        </Grid>
                )
                })}
            </Grid>
        </TileBox>
        <Text>
            UTILITY
        </Text>
    </UtilWrapper>
    </>
  )
}
