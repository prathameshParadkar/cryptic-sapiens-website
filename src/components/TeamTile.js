import React from 'react'
import styled from 'styled-components'
import { Grid, Paper } from '@mui/material'
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
font-size: 25px;
text-align: center;

color: #008C95;

`
const PhotoDiv = styled.div`
    width: 190px;
    height: 190px;
    border-radius: 50%;
    background: #F5F5F5;
`
export default function TeamTile() {
  return (
    <>
    <Container>
    <PhotoDiv >
    </PhotoDiv>
        <Name>
            Name
        </Name>
    </Container>
    </>
  )
}
