import React from 'react'
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { AiFillCaretDown } from "react-icons/ai";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Faq = styled(Paper)`
    width: 85%;
    position: relative;
    z-index: 5;
    scale: 1;
    margin-bottom: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 6%;
    letter-spacing: 0.015em;

    display: flex;
    flex-direction: column;
`

const Question = styled.p`
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #008080;
`

const Answer = styled.p`
    margin-top: 4%;
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #008080;

`

export default function FaqTile(props) {
    const [state, setState] = React.useState(false);

  return (
    <>
        <Faq 
            elevation={3} 
            onClick = {(e) => {
                setState(prev => (!prev));
            }}>
           <Question> {`This is Question ${props.index} ?`}


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
            </Question>
            {state && 
            <Answer>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptates ratione eveniet repudiandae id modi beatae ea qui laudantium nihil, fugit, eius doloremque rem iusto animi! Soluta voluptatibus eos eaque?
           </Answer>
            }
        </Faq>
    </>
  )
}
