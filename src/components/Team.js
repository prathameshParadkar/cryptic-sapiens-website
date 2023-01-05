import React from 'react'
import styled from 'styled-components'
import { Grid, Paper } from '@mui/material'
import TeamTile from './TeamTile'


const Container = styled.div.attrs(props => (
    {
        className : props.className
    }
))`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
`

const Wrapper = styled.div`
    position: relative;
    width: 75%;
    display: flex;
    justify-content: center;

    padding-bottom: 5rem;
    padding-top: 12rem;
    background: linear-gradient(180deg, #A9F1F5 0%, #FFFFFF 100%);
    box-shadow: 0px 22px 38px -6px rgba(0, 0, 0, 0.18);
    border-radius: 136px;
`

const Text = styled.p`
    position: absolute;
    top: 0;
left: 18%;
font-family: 'Jua';
font-style: normal;
font-weight: 400;
font-size: 16rem;
letter-spacing: 0.06em;

color: rgba(0, 141, 150, 0.29);

transform: rotate(0.51deg);
`
const GridDiv = styled.div`
z-index: 1;
    width: 80%;
    height: 75%;
`

export default function Team() {
  return (
    <>
    <Container className="TeamPage">
        <Wrapper>
            <Text>
                TEAM
            </Text>
            <GridDiv>
            <Grid container spacing={3}>
                
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                <Grid item md={3} xs={6} >
                    <TeamTile />
                </Grid>
                
                
            </Grid>
            </GridDiv>
            

        </Wrapper>
    </Container>
    </>
  )
}
