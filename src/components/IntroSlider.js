import React from 'react'
import styled from 'styled-components'
import {NftData} from '../Data/NftData'


const SliderWrapper = styled.div`

    position: absolute;
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




export default function IntroSlider(props) {
  return (
    <>  
    

        <SliderWrapper style={{right : "16%", top : "7%", height : "93vh"}}>
            {NftData.length > 0 && NftData.map((item, index) => {
                return(
                    <SliderHero
                    
                    key = {index}
                    src = {item}
                    />
                    )
                })}
        </SliderWrapper>
    </>
  )
}
