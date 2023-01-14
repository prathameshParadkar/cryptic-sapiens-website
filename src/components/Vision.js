import React from 'react'
import styled from 'styled-components'
import pic from '../images/IMG_3635_1.png';
import Aos from 'aos'
import "aos/dist/aos.css"
import {screens} from '../Data/ScreenSizes'

const Container = styled.div.attrs(props => {
    return (
        {
            className : props.className
        }
    )
})`
    display: flex;
    margin-top : 8vh;

    justify-content: space-around;

    @media ${screens.tablet} {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`
const LeftImage = styled.img`
    height: 120vh;
    width: 108vw;
    @media ${screens.tablet} {
        margin-left: 10%;
        height: 97vh;
        width: 115vw;
    }
    @media ${screens.mobile} {
        height: 75vh;
    }
`

const RightBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin-right: 5%;
        @media ${screens.tablet} {
            align-items: center;
            justify-content: center;
        }
        
    `

    const RightBoxText = styled.p`
        
    font-family: 'Jua';
    font-style: normal;
    font-weight: 200;
    font-size: 7.2vw;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.015em;

    color: rgba(0, 141, 150, 0.65);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media ${screens.tablet} {
            align-items: center;
            font-size: 9vw;
            line-height: 9vw;
            text-align: center;
        }
`

const RightBoxPara = styled.p`
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 2.2vw;
    line-height: 42px;
    text-align: right;

    color: #557371;
    @media ${screens.tablet} {
            align-items: center;
            font-size: 4.7vw;
            text-align: left;
            padding: 0 5%;
            line-height: 4.7vw;
            margin-top: 7%;
            margin-left: 5%;
        }

`

export default function Vision(props) {
    React.useEffect (() => {
        Aos.init({duration : 1000})
    })
  return (
    <Container className="VisionPage">
        <LeftImage data-aos = {!props.isMobile ? "fade-right" : "fade-up" } src={pic} />
        
        <RightBox>
            <RightBoxText data-aos = {!props.isMobile ? "fade-left" : "fade-up" }>
            MISSION & VISION
            </RightBoxText>
            
            <RightBoxPara data-aos = {!props.isMobile ? "fade-left" : "fade-up" }>
            Our vision is to create a space of "Exclusivity" for those who possess our NFTs.
            </RightBoxPara>
            <RightBoxPara data-aos = {!props.isMobile ? "fade-left" : "fade-up" } style={{marginTop : "20px"}}>
            "Our mission is to create web 3 avenues that maintain "Exclusivity". Owning our NFTs adds value and a new dimension to the holder.
            </RightBoxPara>
        
        </RightBox>
        
    </Container>
  )
}
