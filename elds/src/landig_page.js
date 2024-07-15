import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
  }
`;

const LandingPage = ({who_is_the_user, set_who_is_the_user,signin_up,set_signin_up}) => {
  return (
    <>
      <GlobalStyle />
      
      <Container>
        <HeaderContainer>
          <Header>Ethiopian Longitudinal Data System</Header>
          <Subtitle>Please choose an option to continue:</Subtitle>
        </HeaderContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Header = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #666;
`;
export default LandingPage;