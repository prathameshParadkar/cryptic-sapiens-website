import React from 'react'
import styled from 'styled-components';
import { Paper } from '@mui/material';
import Aos from 'aos'
import "aos/dist/aos.css"
import {motion, animate} from "framer-motion"
import {screens} from "../Data/ScreenSizes"

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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 37px;

    @media ${screens.tablet} {
        border-radius: 25px;
    }
    @media ${screens.mobile} {
        border-radius: 15px;
    }
`

const TileBtn = styled.div`
    scale: 1;
     position: absolute;
      top : 30px;
       right: 6%; 
       rotate : 90deg;

       @media ${screens.mobile} {
            top: 18px;
            right: 10%;
       }
`

const Question = styled.p`
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #008080;
    @media ${screens.mobile} {
        font-size: 17px;
    }
`

const Answer = styled.p`
    margin-top: 4%;
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #008080;

    @media ${screens.mobile} {
        font-size: 14px;
    }
`

export default function FaqTile(props) {
    const [state, setState] = React.useState(false);
    const [effect, setEffect] = React.useState(false);
    React.useEffect(() => {
        Aos.init({duration : 1000})
      }, [])
  return (
    <>
        <Faq 
            as = {motion.div}
            animate = {{
                scale : effect ? 1.05 : 1, 
            }}
            elevation={3} 
            data-aos = "fade-up"
            onClick = {(e) => {
                setState(prev => (!prev));
                setEffect(prev => (!prev));
            }}>
           <Question> {`This is Question ${props.index} ?`}


           {!state && 
            <TileBtn
             
            >
                &gt;
            </TileBtn>
            }
            {state && 
            <TileBtn
            style={{scale: "1", position: "absolute", top : '30px' , right: "6%", rotate : "90deg"}} 
            >
                &lt;
            </TileBtn>
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
