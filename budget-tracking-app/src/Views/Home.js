import React, { useEffect, useState, useRef } from 'react'
import styled from "styled-components"
import {FaDumbbell, FaBusAlt, FaPoundSign} from "react-icons/fa"
import {BsFillHouseDoorFill,BsFillBasketFill} from "react-icons/bs"
import { TbGlass} from "react-icons/tb"
import {IoMdPaper} from "react-icons/io"
import {IconContext} from "react-icons"
import useExpense from '../services/firebase/useExpense'
import { getAuth } from 'firebase/auth';
import createNotification from '../assets/notification';
import { getDocs } from 'firebase/firestore'
import ExpensesTracker from '../Components/ExpensesTracker'
import ExpensesForm from '../Components/ExpensesForm'


const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: 100%;
  margin:auto auto auto;
`
const Header = styled.h3`
  font-weight: bold;
  font-style: oblique;
  text-shadow: 2px 2px 5px grey;
`

const InputBox = styled.div`
  display:flex;
  background: hsl(223, 0%, 93%);
  border: none;
  width: 100%;
  height: 5vh;
 
`
const Input = styled.input`
  background: hsl(223, 0%, 93%);
  border: none;
  width: 100%;
  height: 90%;
  font-size: 21px;
  
`

const Table = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding:2vh;
`

const Items = styled.div`
  display:flex-column;
  border: 1px solid rgba(0,0,0,0.8);
  padding: 10px;
  margin: 0px;
  text-align:center;
  items-algin:center;
  justify-content:center;

`
const Text = styled.div`
  font-style: italic;
  text-size:10px;
  margin:5px;
`

const Button = styled.button`

`
const Price = styled(Text)`

`

function Home() {
  const {createMoneyIn,getLastExpense,getLastMoneyIn} = useExpense()
  const auth = getAuth()
  let expnse = null
  const expensesList = useRef([])
  const [balance, setBalance] = useState(0)
  const [monthlyLimit, setMonthlyLimit] = useState(0)
  const [savings, setSavings] = useState(0)
  const [editor,setEditor] = useState(false)
  

  const edit = () =>{
    
    setEditor(true)
  }


  const sendDetails = async (e) =>{
    e.preventDefault()
    
    const moneyIndetails ={
      user: auth.currentUser.email,
      userbalance:{
      balance: +balance,
      savings: +savings, 
      monthlyLimit: +monthlyLimit},
      createdAt: new Date().toString()
    }
    try{
      await createMoneyIn(moneyIndetails)
    }catch(error){
      console.log(error)
      }

    }
    const callNot = () =>{
      createNotification('info')
    }
    const getData = async() =>{
      const lastExpense = getLastExpense(auth.currentUser?.email)
      let datas = []
      const expensesSnap = await getDocs(lastExpense)
    
      expensesSnap.forEach((doc) =>{
        let data = doc.data()
        datas.push(data)
      })
      expensesList.current = datas
      const lastMoneyIn = getLastMoneyIn(auth.currentUser?.email)

      const moneySnap = await getDocs(lastMoneyIn)

      moneySnap.forEach((doc) =>{
        let data = doc.data()
        setBalance(data.userbalance.balance)
        setMonthlyLimit(data.userbalance.monthlyLimit)
        setSavings(data.userbalance.savings)
      })

    }
    
    
    useEffect(() => {
     
      getData()
    },[])
   
    if(expensesList.current[0]){
      expnse = expensesList.current[0].expenses
    }
   
    
  return (
    <Container>
      <IconContext.Provider value={{size:"1.15em",style:{justifyContent: 'center',alignSelf:"center", paddingLeft: "1em"}}}>
        <Header>Balance</Header>
        <InputBox>
          <FaPoundSign/>
          <Input value={balance} type="number" onChange={e => setBalance(e.target.value)}/>
        </InputBox>
        <Header>Monthly Limit</Header>
        <InputBox>
          <FaPoundSign/>
         <Input value={monthlyLimit} type="number" onChange={e => setMonthlyLimit(e.target.value)}/>
        </InputBox>
        <Header>Savings </Header>
        <InputBox>
          <FaPoundSign/>
          <Input value={savings} type="number" onChange={e => setSavings(e.target.value)}/>
        </InputBox>
        <Button type="button" onClick ={(e) => {sendDetails(e)}}> Set your Balance </Button>
        <Header>Expenses</Header>
      </IconContext.Provider>
      <ExpensesTracker {...expnse}/>
      {!editor ? <div>
          <button type="button" onClick={edit}>Edit expenses</button>
        </div> : <ExpensesForm/> }
      
      <button onClick={callNot}>Click me</button>
    </Container>
  )
}

export default Home