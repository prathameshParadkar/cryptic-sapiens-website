import React from 'react'
import styled from 'styled-components'
import FaqTile from './FaqTile'

const Container = styled.div.attrs(props => (
    {
        className : props.className
    }
))`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 50px;
`

const Wrapper = styled.div`
    position: relative;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    background: linear-gradient(180deg, #A9F1F5 0%, #FFFFFF 100%);
    box-shadow: 0px 22px 38px -6px rgba(0, 0, 0, 0.18);
    border-radius: 136px;
`

const Text = styled.p`
    z-index: 0;
   position: absolute;
    top: 190px;
    left: -150px;

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 250px;
    line-height: 382px;
    letter-spacing: 0.015em;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-90deg);
    color: rgba(0, 141, 150, 0.46);

`

const FaqTileWrapper = styled.div`
    width: 70%;
    margin-left: 4rem;
`

export default function Faq() {
  return (
    <>
    <Container className="FaqPage">
        <Wrapper>
            <Text>
                FAQS
            </Text>
            <FaqTileWrapper>
                <FaqTile 
                index = {1}
                
                />
                <FaqTile 
                index = {2}
                />
                <FaqTile 
                index = {3}
                />
                <FaqTile 
                index = {4}
                />
            </FaqTileWrapper>
        </Wrapper>
    </Container>
    </>
  )
}
