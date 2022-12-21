import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: 100%;
  margin:auto auto auto;
`

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
function ExpensesForm() {
  return (
    <Container>
        <Form>
            <Label>Gym </Label>
            <Input type="text"/>
            <Label>Rent </Label>
            <Input type="text"/>
            <Label>Groceries </Label>
            <Input type="text"/>
            <Label>Travel </Label>
            <Input type="text"/>
            <Label>Social </Label>
            <Input type="text"/>
            <Input btn type="submit" value="Save"/>
        </Form>
    </Container>
  )
}

export default ExpensesForm