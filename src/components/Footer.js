import React from 'react'
import styled from 'styled-components'
import pic from '../images/IMG_3725.png'
import Logo from '../images/cryptic_Logo _1.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
`

const FooterWrapper = styled.div`
    width: 100%;
    height: 20vh;
    background: #ABE2F3;
    display: flex;
    justify-content: space-around;
`

const FooterLogo = styled.img`
    align-self: center;
    width : 25%;
`
const FooterLinks = styled.div`
    display: flex;
    align-items: flex-end;

    margin-bottom: 1%;
`

export default function Footer() {
    const linkStyles = {color : "white", scale : "2", margin: "20px", cursor : "pointer"}
  return (
    <>
        <Container>
            <Image src={pic} alt='' />

            <FooterWrapper>

                
                    <FooterLogo style={{scale : "1"}} src={Logo} alt="Cryptic Sapiens Logo" />
                
                
                <FooterLinks>
                    <Link to="/facebook" >
                        <FaFacebookF style={linkStyles} />
                    </Link>
                    <Link to="/twitter">
                        <FaTwitter style={linkStyles} />
                    </Link>
                    <Link to="/linkedin">
                        <FaLinkedinIn style={linkStyles} />
                    </Link>
                    <Link to="/instagram">
                        <FaInstagram style={linkStyles} />
                    </Link>
                </FooterLinks>
            </FooterWrapper>
        </Container>
    </>
  )
}
