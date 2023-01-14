import React from 'react'
import { duration, Paper } from '@mui/material'
import styled from 'styled-components'
import util1 from "../../images/util1.png"
import { display } from '@mui/system'
import { animate } from 'framer-motion'
import { motion } from 'framer-motion'
import {screens} from '../../Data/ScreenSizes'

const TileImg = styled.img`
    height: 65%;
    width: 100%;
`

const TileText = styled.p`
    margin-top: 15%;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4vw;
    text-align: center;
    
    @media ${screens.tablet} {
        font-size: 2.7vw;
        /* margin: 10%; */
    }
    @media ${screens.mobile} {
        font-size: 3.5vw;
        /* margin: 10%; */
    }
    color: #008C95;
`
const Tile = styled(Paper)`
    height : 33vh;
    width : 13vw;
    margin-top : 20px;
    min-width : 150px;

    @media ${screens.tablet} {
        height: 23vh;
        width: 25vw;
        margin-top: 18%;
        /* margin: 10%; */
    }
    @media ${screens.mobile} {
        height: 23vh;
        width: 34vw;
        margin-top: 15%;
        min-width: 0;
        /* margin: 10%; */
    }
`

export default function UtilTile(props) {

    const [showFront, setShowFront] = React.useState(true)
    const [effect, setEffect] = React.useState(false)

  return (
        <>
            <Tile
                as = {motion.div}
                style={{
                
                
                background: showFront ? props.util.style.background : "white",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                justifyContent: "space-between",
                overflow : "hidden",
                cursor : "pointer",
                
                }}
                animate = {{
                    rotateY : effect ? 180 : 0,
                    
                }}
                transition

                onClick = {() => {
                    setShowFront(prev => (!prev));
                    setEffect(prev => (!prev))
                }}
                >
                    {
                        showFront && (
                        <>
                            <TileText>{props.util.text}</TileText>
                            <TileImg src={props.util.img} alt="" />
                        </>    
                        )
                    }

                    {
                        !showFront &&
                        (
                            <TileText
                            as={motion.div}
                            animate = {{
                                rotateY : 180
                                
                            }}
                            transition = {{
                                duration : 0
                            }}
                            
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quo adipisci saepe facilis perspiciatis nisi tenetur, minima impedit autem ullam earum illum 
                            </TileText>
                        ) 
                    }
                    
                
            </Tile>
        </>
  )
}
