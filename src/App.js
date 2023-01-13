import React from 'react'
import Home from './components/Home';
import './index.css';
import styled from 'styled-components';
import Intro from './components/Intro';
import Vision from './components/Vision';
import Utility from './components/Utility/Utility';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: auto;
    overflow: hidden;
`

function App() {
  return (
    <Container>
        <Home />
        <Intro />
        <Vision />
        <Utility />
        <Roadmap />
        <Tokenomics />
        <Team />
        <Faq />
        <Footer />
    </Container>
  );
}

export default App;
