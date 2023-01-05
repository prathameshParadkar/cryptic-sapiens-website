import React from 'react'
import { Paper } from '@mui/material'
import styled from 'styled-components'
import util1 from "../../images/util1.png"
import { display } from '@mui/system'

const TileImg = styled.img`
    height: 65%;
    width: 100%;
`

const TileText = styled.p`
    margin-top: 15%;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    color: #008C95;
`

export default function UtilTile(props) {
  return (
        <>
            <Paper style={{
                height : "250px", 
                width : "200px", 
                marginTop : "20px",
                background: props.util.style.background,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                justifyContent: "space-between",
                overflow : "hidden"

                }}>
                    <TileText>{props.util.text}</TileText>
                <TileImg src={props.util.img} alt="" />
                
            </Paper>
        </>
  )
}
