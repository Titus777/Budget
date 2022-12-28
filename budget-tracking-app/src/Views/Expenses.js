import React, { useState, useRef, useEffect,useMemo } from 'react'
import styled from 'styled-components'
import ExpensesForm from '../Components/ExpensesForm'
import ExpensesGraph from '../Components/ExpensesGraph'
import ExpensesTracker from '../Components/ExpensesTracker'
import { getAuth } from 'firebase/auth'
import useExpense from '../services/firebase/useExpense'
import { getDocs } from 'firebase/firestore'

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
  const {getLastExpense} = useExpense()
  const [fetched, setFetch] = useState(false)
  const auth = getAuth()
  const expensesList = useRef([])

  const [editor,setEditor] = useState(false)
  

  const edit = () =>{
    
    setEditor(true)
  }
  const getData = async () =>{
    const lastExpense = getLastExpense(auth.currentUser?.email)
    
    let datas = []
    const expensesSnap = await getDocs(lastExpense)
  
    expensesSnap.forEach((doc) =>{
      let data = doc.data()
      datas.push(data)
    })
   
    expensesList.current = datas[0].expenses
    if(!expensesList.current){
      setFetch(false)
    }
    setFetch(true)
  }    
 
 

  useEffect(() => {
    getData()
  },[setFetch])

  console.log(expensesList.current)
 
  

  return (
    <Container>
        <Header>Expenses</Header>
        <ExpensesGraph  {...expensesList.current}/>
        
        {!editor ? <div>
          <button type="button" onClick={edit}>Edit expenses</button>
        </div> : <ExpensesForm/> }
        
    </Container>
  )
}

export default Expenses