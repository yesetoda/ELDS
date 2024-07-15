import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import RegistrationForm from './registration_form';
import LoginForm from './login_form';

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
        <ButtonContainer>
          <Button>
            <ButtonText>Login</ButtonText>
            <OptionContainer>

            <Option onClick={() => { set_who_is_the_user("Student");set_signin_up("Login")}}>Student</Option>
              <Option onClick={() => {set_who_is_the_user("Teacher");set_signin_up("Login")}}>Teacher</Option>
              <Option onClick={() => {set_who_is_the_user("Parent");set_signin_up("Login")}}>Parent</Option>
              <Option onClick={() => {set_who_is_the_user("Admin");set_signin_up("Login")}}>Admin</Option>
              <Option onClick={() => {set_who_is_the_user("School");set_signin_up("Login")}}>School</Option>
            </OptionContainer>
          </Button>
          <Button>
            <ButtonText>Sign Up</ButtonText>
            <OptionContainer>

              <Option onClick={() => { set_who_is_the_user("Student");set_signin_up("Registration")}}>Student</Option>
              <Option onClick={() => {set_who_is_the_user("Teacher");set_signin_up("Registration")}}>Teacher</Option>
              <Option onClick={() => {set_who_is_the_user("Parent");set_signin_up("Registration")}}>Parent</Option>
              <Option onClick={() => {set_who_is_the_user("Admin");set_signin_up("Registration")}}>Admin</Option>
              <Option onClick={() => {set_who_is_the_user("School");set_signin_up("Registration")}}>School</Option>
            </OptionContainer>
          </Button>
        </ButtonContainer>
      </Container>
      {console.log(signin_up)}
      {/* {signin_up==="Login"? <LoginForm who_is_the_user={who_is_the_user}/> : (signin_up ==="Registration" ? <RegistrationForm who_is_the_user={who_is_the_user} signin_up={signin_up} /> :null)} */}
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ButtonText = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Option = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  font-size: 18px;
  color: #666;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default LandingPage;