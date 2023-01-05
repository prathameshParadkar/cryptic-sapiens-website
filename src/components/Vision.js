import React from 'react'
import styled from 'styled-components'
import pic from '../images/IMG_3635_1.png';

const Container = styled.div.attrs(props => {
    return (
        {
            className : props.className
        }
    )
})`
    display: flex;
    height: 100vh;
    overflow: hidden;
    justify-content: space-around;
`
const LeftImage = styled.img`
    height: 55rem;
    width: 55rem;
`

const RightBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin-right: 5%;
    `

    const RightBoxText = styled.p`
        
    font-family: 'Jua';
    font-style: normal;
    font-weight: 200;
    font-size: 116px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.015em;

    color: rgba(0, 141, 150, 0.65);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const RightBoxPara = styled.p`
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    text-align: right;

    color: #557371;

`

export default function Vision() {
  return (
    <Container className="VisionPage">
        <LeftImage src={pic} />
        
        <RightBox>
            <RightBoxText>
            MISSION & VISION
            </RightBoxText>
            
            <RightBoxPara>
            Our vision is to create a space of "Exclusivity" for those who possess our NFTs.
            </RightBoxPara>
            <RightBoxPara style={{marginTop : "20px"}}>
            "Our mission is to create web 3 avenues that maintain "Exclusivity". Owning our NFTs adds value and a new dimension to the holder.
            </RightBoxPara>
        
        </RightBox>
        
    </Container>
  )
}
