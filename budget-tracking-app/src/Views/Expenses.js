import React from 'react'
import styled from 'styled-components'
import ExpensesGraph from '../Components/ExpensesGraph'
import ExpensesTracker from '../Components/ExpensesTracker'

const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: 100%;
  margin:auto auto auto;
`

const Header = styled.h4`
    font-weight: bold;
    font-style: oblique;
    text-shadow: 2px 2px 5px grey;
`

function Expenses() {
  return (
    <Container>
        <ExpensesGraph/>
        <Header>Expenses</Header>
        <ExpensesTracker/>
    </Container>
  )
}

export default Expenses