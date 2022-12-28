import React, { useState, useRef, useEffect,useMemo } from 'react'
import styled from 'styled-components'
import ExpensesForm from '../Components/ExpensesForm'
import ExpensesGraph from '../Components/ExpensesGraph'
import ExpensesTracker from '../Components/ExpensesTracker'
import { getAuth } from 'firebase/auth'
import useExpense from '../services/firebase/useExpense'
import { getDocs } from 'firebase/firestore'
import CompleteGraph from '../Components/CompleteGraph'

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
  const {getLastExpense,getLastMoneyIn} = useExpense()
  const [fetched, setFetch] = useState(false)
  const auth = getAuth()
  const expensesList = useRef([])
  const moneyList = useRef([])

  
  const getData = async () =>{
    const lastExpense = getLastExpense(auth.currentUser?.email)
    const lastMoneyIn = getLastMoneyIn(auth.currentUser?.email)
    
    let expdatas = []
    let moneyData = []
    const expensesSnap = await getDocs(lastExpense)
    const moneySnap = await getDocs(lastMoneyIn)
  
    expensesSnap.forEach((doc) =>{
      let data = doc.data()
      expdatas.push(data)
    })

    moneySnap.forEach((doc) =>{
      let data = doc.data()
      moneyData.push(data)
    })
    
    expensesList.current = expdatas[0].expenses
    moneyList.current = moneyData[0].userbalance


    if(!expensesList.current){
      setFetch(false)
    }
    setFetch(true)
  }    
 

  useEffect(() => {
    getData()
  },[fetched])


  return (
    <Container>
        <Header>Expenses</Header>
        <ExpensesGraph  {...expensesList.current}/>
        <Header>Total</Header>
        <CompleteGraph {...moneyList.current} {...expensesList.current}/>
    </Container>
  )
}

export default Expenses