import React from 'react'
import styled from 'styled-components';
import { Paper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const DropDown = styled(Paper)`
    position: absolute;
    width: 35%;
    z-index: 5;
    scale: 1;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 2%;

    letter-spacing: 0.015em;

    display: flex;
    flex-direction: column;
`

const DropDownText = styled.p`
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #008080;
`

const DropDownPara = styled.p`
    margin-top: 3%;
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #008080;

`

export default function Dropdown(props) {
    const [state, setState] = React.useState(false);

  return (
    <>
        <DropDown 
            style={{left: `${props.left}px`, top: `${props.top}px`}} 
            elevation={3}
            onClick = {(e) => {
                setState(prev => (!prev));
            }}>
           <DropDownText> {`Destination: ${props.index}`}
            {!state && 
            <ArrowDropDownIcon 
            style={{scale: "3", position: "absolute", right: "6%"}} 
            />
            }
            {state && 
            <ArrowDropUpIcon 
            style={{scale: "3", position: "absolute", right: "6%"}} 
            />
            }
            <br /> 
            {props.title}
            </DropDownText>
            {state && 
            <DropDownPara>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptates ratione eveniet repudiandae id modi beatae ea qui laudantium nihil, fugit, eius doloremque rem iusto animi! Soluta voluptatibus eos eaque?
           </DropDownPara>
            }
        </DropDown>
    </>
  )
}
