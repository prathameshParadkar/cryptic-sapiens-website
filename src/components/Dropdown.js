import React from 'react'
import styled from 'styled-components';
import { Paper } from '@mui/material';
import Aos from 'aos'
import "aos/dist/aos.css"
import {motion} from 'framer-motion'
import { animate } from 'framer-motion'
import {screens} from '../Data/ScreenSizes'

const DropDown = styled(Paper)`
    position: absolute;
    width: 32%;
    z-index: 5;
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2%;
    letter-spacing: 0.015em;
    border-radius: 37px;
    display: flex;
    flex-direction: column;
    
    @media ${screens.tablet} {
        padding: 2.5%;
        border-radius: 3vw;
    }
    @media ${screens.tablet} {
        padding: 2%;
        border-radius: 3vw;
    }
`

const DropDownText = styled.p`
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4vw;
    color: #008080;
    @media ${screens.tablet} {
        font-size: 2vw;
    }
    @media ${screens.mobile} {
        font-size: 2.7vw;
    }
`

const DropDownPara = styled.p`
    margin-top: 3%;
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 1vw;
    color: #008080;

    @media ${screens.tablet} {
        font-size: 1.5vw;
    }
    @media ${screens.mobile} {
        font-size: 2vw;
    }

`
const DropBtn = styled.div`
    scale: 1;
 position: absolute;
  top : 30px ;
   right: 6%;
    rotate : 90deg;
    @media ${screens.mobile} {
        top : 13px ;
        right: 6%;
    }
`

export default function Dropdown(props) {
    const [state, setState] = React.useState(false);
    const [effect, setEffect] = React.useState(false);
    
    React.useEffect(() => {
        Aos.init({duration : 1000})
    }, [])

  return (
    <>
        <DropDown 
            as = {motion.div}
            animate = {{
                scale : effect ? 1.05 : 1, 
                
            }}
            transition={{ duration : 0 }}
            data-aos = "fade-up"
            style={{left: `${props.left}vw`, top: `${props.top}vh`}} 
            elevation={3}
            onClick = {(e) => {
                setState(prev => (!prev));
                setEffect( prev => (!prev))
            }}>

           <DropDownText> {`Destination: ${props.index}`}
            {!state && 
            <DropBtn 
            >
                &gt;
            </DropBtn>
            }
            {state && 
            <DropBtn
            >
                &lt;
            </DropBtn>
            }
            <br /> 
            {props.title}
            </DropDownText>
            {state && 
            <DropDownPara>
               <ol style={{paddingLeft : "5%"}}>
                {props.para.length > 0 && props.para.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
                </ol>  
            </DropDownPara>
            }
        </DropDown>
    </>
  )
}
