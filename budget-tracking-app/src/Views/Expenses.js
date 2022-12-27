import React, { useState } from 'react'
import styled from 'styled-components'
import ExpensesForm from '../Components/ExpensesForm'
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
  const [editor,setEditor] = useState(false)
  const edit = () =>{
    
    setEditor(true)
  }
  return (
    <Container>
        <ExpensesGraph/>
        <Header>Expenses</Header>
        {!editor ? <div>
          <ExpensesTracker/>
          <button type="button" onClick={edit}>Edit expenses</button>
        </div> : <ExpensesForm/> }
        
    </Container>
  )
}

export default Expenses