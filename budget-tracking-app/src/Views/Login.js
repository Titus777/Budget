import React from 'react'
import styled from 'styled-components'
import LoginForm from '../Components/LoginForm'
import RegisterForm from '../Components/RegisterForm'

const LoginContainer = styled.div`
    display:flex;
    margin: auto;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    border: 2px solid grey;
    box-shadow: 2px;
    margin-top: 20vh;
    height: 50vh;
    width: 50%;
    background-color: hsl(100, 0%, 69%);
`
const RegisterBox = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height:50vh;
    padding: 3vh 3vh 3vh 3vh;
`
const Input = styled.input`
    width:12em;
    padding: 1.5vh;
    margin-top:10vh;
    border-radius: 40%;
`

function Login() {
  return (
    <>
    <h3>Sign Up</h3>
    <LoginContainer>
        <LoginForm/>
        <RegisterBox>
            <div>Not registered?! Create a new account now!</div>
            <Input type="button" value="Create new account!"/>
        </RegisterBox>
    </LoginContainer>
    </>
  )
}

export default Login