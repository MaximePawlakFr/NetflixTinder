import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Container from './theme/grid/Container'
import Description from './description'
import Navigation from './navigation'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: #f8f9fa;
`;

const Image=styled.img`

height:50%

`;

class App extends Component {
  render() {
    return (

      <Container>
      <Navigation>
      </Navigation>
      
     <Wrapper>
    <Title>
      Like your favs series and movies online!
    </Title>

    
    
  </Wrapper>
 
    <Description/>


  </Container>

    );
  }
}

export default App;