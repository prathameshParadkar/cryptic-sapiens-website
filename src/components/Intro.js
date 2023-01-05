import React from 'react'
import styled from 'styled-components'
import IntroSlider from './IntroSlider'
import {NftData} from '../Data/NftData'
import { Ref } from 'react'

const Container = styled.div.attrs(props => ({
    className : props.className
}))`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    margin-top: 100px;
`

const BlueDiv = styled.div`
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    padding-left: 3rem;
    padding-top: 0.8rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    border-radius: 47px;
`

const IntroText = styled.h1`
    top: 2.5%;
    position: absolute;
    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 7.5rem;
    letter-spacing: 0.015em;
    z-index: 3;
    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const IntroPara = styled.p`
    position: absolute;
    
    width: 47%;
    top: 24%;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    z-index: 2;
    color: #557371;

`

const SideBox = styled.div`
    width: 50%;
    height: 41%;
    box-sizing: border-box;
    padding-left: 3rem;
    padding-top: 0.8rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const SideBoxText = styled.h1`

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;

    display: flex;
    align-items: center;
    letter-spacing: 0.015em;

    color: #59B5BA;

    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

const SideBoxPara = styled.p`
    position: relative;
    width: 100%;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;


    color: #557371;

`
const SideBoxBtn = styled.button`
    position: relative;
    width: 100%;
    height: 15%;


    background: linear-gradient(180deg, #F5F5F5 0%, #C4F5F5 120.37%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 72px;

    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    border: none;

`

const BlurDiv1 = styled.div`
   position: absolute;
    width: 85%;
    height: 15%;
    top: 0;
    left : 6%;
    z-index: -1;
    background-color: #ABE2F3;

    background: #ABE2F3;
    border-radius: 47px;

    background: #ABE2F3;
    border-radius: 47px;
    z-index: 2;
    background: linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%);
    border-radius: 47px;
`
const BlurDiv2 = styled.div`
   position: absolute;
    width: 50%;
    height: 15%;
    top: 17%;
    right: 25%;
    z-index: -1;
    background-color: #ABE2F3;

    background: #ABE2F3;
    border-radius: 47px;

    background: #ABE2F3;
    border-radius: 47px;
    z-index: 2;
    background: linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%), linear-gradient(180deg, #ABE2F3 26.9%, rgba(171, 226, 243, 0) 100%);
    border-radius: 47px;
`
const BlurDiv3 = styled.div`
   position: absolute;
    width: 25%;
    height: 25%;
    top: 87%;
    right: 0;
    z-index: 2;
    background: linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%);
    border-radius: 47px;
    transform: rotate(-180deg);
`
const BlurDiv4 = styled.div`
   position: absolute;
    width: 15%;
    height: 20%;
    top: 80%;
    right: 25%;
    z-index: 2;
    background: linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 26.9%, rgba(255, 255, 255, 0) 100%);
    border-radius: 47px;
    transform: rotate(-180deg);
`
const SliderWrapper = styled.div`

    position: relative;
    /* top: 7%; */
    /* right: 16%; */
    display: flex;
    flex-direction: column;
    /* height: 93vh; */
    margin-top: auto;
    margin-bottom: auto;
    overflow: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
  display: none;
}
`

const SliderHero = styled.img`
    width: 150px;
    height: 189.6px;
    border-radius: 25px;
    margin-bottom: 1.5rem;
`

const BackDiv = styled.div`
    position: absolute;
    width: 85%;
    height: 55%;
    top: 0;
    left : 6%;
    z-index: -1;
    background-color: #ABE2F3;

    background: #ABE2F3;
    border-radius: 47px;
`



export default function Intro() {
  return (
    <>
    <Container className="IntroPage" >
        <BackDiv></BackDiv>
        <BlurDiv1></BlurDiv1>
        <BlurDiv2></BlurDiv2>
        <BlurDiv3></BlurDiv3>
        <BlurDiv4></BlurDiv4>
        <div style={{display : "flex", marginTop : "30px"}}>
        <SliderWrapper style={{right : "0", top : "0", height : "73vh", marginRight:"50px", marginTop : "125px"}}>
            {NftData.length > 0 && NftData.map((item, index) => {
                return(
                    <SliderHero
                     key = {index}
                    src = {item}
                    />
                    )
                })}
        </SliderWrapper>
        <SliderWrapper style={{right : "0", top : "0", height : "100vh"}}>
            {NftData.length > 0 && NftData.map((item, index) => {
                return(
                    <SliderHero
                    
                    key = {index}
                    src = {item}
                    />
                    )
                })}
        </SliderWrapper>
        </div>
     
        <BlueDiv>
        
        {/* <BlurDiv></BlurDiv> */}
            <IntroText>
                INTRODUCTION
            </IntroText>
            <IntroPara>
            Human evolution is driven by a desire to hunt, survive, collect rare items, explore, and form communities. This has resulted in the creation of diverse cultures around the world. Culture is a fundamental part of our identity and helps us connect with others. The evolved cultures preserved over blockchain using cryptography by "Cryptic Sapiens".
            </IntroPara>
        </BlueDiv>

        <SideBox>
            <SideBoxText>
            BE A CRYPTIC SAPIEN
            </SideBoxText>
            <SideBoxPara>
            Join Cryptic Sapiens if you value cultures, enjoy challenges, have a positive mindset, love travelling, meeting new people, learning, laughing, and sharing experiences."
            </SideBoxPara>
            <SideBoxBtn>
            Whitepaper
            </SideBoxBtn>
            
        </SideBox>  
        
    </Container>
        
        
    </>
  )
}
