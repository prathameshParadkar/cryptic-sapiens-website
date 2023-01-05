import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled from 'styled-components';


const Btn = styled.div`
    height: 50px;
    width: 50px;

    position: fixed;
    top: 90%;
    right: 3%;

    border-radius: 50%;
    background-color: #ABE2F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-family: 'Itim';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
` 

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = React.useState(false)

    const ToggleAppear = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        }
        else{
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth",
        })
    }

    React.useEffect(() => {
        window.addEventListener('scroll', ToggleAppear)

        return () => {
            window.removeEventListener('scroll', ToggleAppear)
        }
    }, [])
    
return (
    <> 
    {isVisible && 
    <Btn onClick={scrollToTop}>
        <ArrowUpwardIcon />
    </Btn>
    }
    </>
  )
}
