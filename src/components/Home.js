import React from 'react'
import styled from 'styled-components'
import img1 from '../images/IMG_3285_1.png'
import Navbar from './Navbar'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`


export default function Home() {
  return (
    <Container>
    <Navbar />
    <img style={{width : "100vw", height : "75vw", marginTop : "40px"}} src={img1} />
    </Container>
  )
}
