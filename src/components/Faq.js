import React from 'react'
import styled from 'styled-components'
import FaqTile from './FaqTile'
import {screens} from "../Data/ScreenSizes"

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
    @media ${screens.mobile} {
        flex-direction: column;
        align-items: center;
    }
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

    @media ${screens.tablet} {
        width: 85%;
        border-radius: 100px;
    }
    @media ${screens.mobile} {
        width: 90%;
        border-radius: 50px;
        padding: 3rem 0;
    }
`

const Text = styled.p`
    z-index: 0;
   position: absolute;
    top: 25vh;
    left: -6vw;

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 13vw;
    line-height: 382px;
    letter-spacing: 0.015em;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-90deg);
    color: rgba(0, 141, 150, 0.46);
    @media ${screens.tablet} {
        top: 7.5vh;
        font-size: 20vw;
        left: -13vw;
    }
`

const MobileText = styled.p`
  z-index: 0;

    font-family: 'Jua';
    font-style: normal;
    font-weight: 400;
    font-size: 30vw;
    letter-spacing: 0.015em;

    color: rgba(0, 141, 150, 0.46);
    @media ${screens.mobile} {
        
    }
`

const FaqTileWrapper = styled.div`
    width: 70%;
    margin-left: 4rem;

    @media ${screens.mobile} {
        width: 85%;
        margin-left: 0;
    }
`

export default function Faq() {
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() =>{
        if (window.innerWidth <= 764){
            setIsMobile(true)
        }
    }, [])
  return (
    <>
    <Container className="FaqPage">
            { isMobile &&
            
                <MobileText>
                FAQS
                 </MobileText>
            }
        <Wrapper>
            {!isMobile &&
                <Text>
                    FAQS
                </Text>
            }
            
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
