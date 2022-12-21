import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    height:100%;
    align-items:center;
    justify-content:center;
`

const Label = styled.label`
    margin: 1vh;
    padding: 3px;

`

const Input = styled.input`
    width: ${props => props.btn ? "40%": "70%"};
    padding: ${props => props.btn ? "1.5vh": "1vh"};
    margin-top: ${props => props.btn ? "6vh": "1vh"};
    border-radius: 40px;

`

function RegisterForm() {
  return (
    <Form>
        <Label>Username</Label>
        <Input type="text"/>
        <Label>Email</Label>
        <Input type = "text"/>
        <Label>Password</Label>
        <Input type="password"/>
        <Input btn type="submit" value="Register NOW!"/>
    </Form>
  )
}

export default RegisterForm