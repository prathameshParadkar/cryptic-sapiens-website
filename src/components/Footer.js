import React from 'react'
import styled from 'styled-components'
import pic from '../images/IMG_3725.png'
import Logo from '../images/cryptic_Logo _1.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {screens} from "../Data/ScreenSizes"

const Container = styled.div.attrs(props => (
    {
        className : props.className
    }
))`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
`

const Image = styled.img`
    scale : 0.8;

    @media ${screens.tablet} {
        scale: 0.9;
    }
`

const FooterWrapper = styled.div`
    width: 100%;
    height: 17vh;
    background: #ABE2F3;
    display: flex;
    justify-content: space-around;
    @media ${screens.tablet} {
        height: 8vh;
    }
    @media ${screens.mobile} {
        height: 10vh;
    }
`

const FooterLogo = styled.img`
    align-self: center;
    width : 20vw;
    @media ${screens.tablet} {
        width: 30vw;
    }
    @media ${screens.mobile} {
        width: 37vw;
    }
`
const FooterLinks = styled.div`
    display: flex;
    align-items: flex-end;

    margin-bottom: 1%;
`

const FooterLink = styled(Link)`
    color : white;
       margin: 1vw; 
       font-size: 1.5vw;
    cursor : pointer;

    @media ${screens.tablet} {
        margin-bottom: 10%;
        font-size: 2.5vw;
    }
    @media ${screens.mobile} {
        margin-bottom: 10%;
        font-size: 5vw;
        margin: 1.5vw; 
    }
`

export default function Footer() {
  return (
    <>
        <Container>
            <Image src={pic} alt='' />

            <FooterWrapper>

                
                    <FooterLogo style={{scale : "1"}} src={Logo} alt="Cryptic Sapiens Logo" />
                
                
                <FooterLinks>
                    <FooterLink to="/facebook" >
                        <FaFacebookF />
                    </FooterLink>
                    <FooterLink to="/twitter">
                        <FaTwitter />
                    </FooterLink>
                    <FooterLink to="/linkedin">
                        <FaLinkedinIn />
                    </FooterLink>
                    <FooterLink to="/instagram">
                        <FaInstagram />
                    </FooterLink>
                </FooterLinks>
            </FooterWrapper>
        </Container>
    </>
  )
}
