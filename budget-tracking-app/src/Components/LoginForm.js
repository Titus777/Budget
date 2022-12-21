import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    height:100%;
    align-items:center;
    justify-content:center;
    border-right: double black;
    border-radius: 20%
`

const Label = styled.label`
    margin: 1vh;
    padding: 5px;
    

`

const Input = styled.input`
    width: ${props => props.btn ? "40%": "70%"};
    padding: ${props => props.btn ? "1.5vh": "1vh"};
    margin-top: ${props => props.btn ? "10vh": "0"};
    border-radius: 40%;
 
`


function LoginForm() {
  return (
    <Form>
        <Label>Username</Label>
        <Input type="text" placeholder="Username"/>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"/>
        <Input btn type="submit" value="Login"/>
    </Form>
  )
}

export default LoginForm