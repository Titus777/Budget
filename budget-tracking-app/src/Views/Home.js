import React, { useState } from 'react'
import styled from "styled-components"
import {FaDumbbell, FaBusAlt, FaPoundSign} from "react-icons/fa"
import {BsFillHouseDoorFill,BsFillBasketFill} from "react-icons/bs"
import {TbCurrentLocation, TbGlass} from "react-icons/tb"
import {IoMdPaper} from "react-icons/io"
import {IconContext} from "react-icons"
import useExpense from '../services/firebase/useExpense'
import { getAuth } from 'firebase/auth';
import createNotification from '../assets/notification';


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
  const {createMoneyIn} = useExpense()
  const auth = getAuth()
  const [balance, setBalance] = useState(0)
  const [monthlyLimit, setMonthlyLimit] = useState(0)
  const [savings, setSavings] = useState(0)



  const sendDetails = async (e) =>{
    e.preventDefault()
    
    const moneyIndetails ={
      user: auth.currentUser.email,
      userbalance:[
      balance,
      savings, 
      monthlyLimit],
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
 

  return (
    <Container>
      <IconContext.Provider value={{size:"1.15em",style:{justifyContent: 'center',alignSelf:"center", paddingLeft: "1em"}}}>
        <Header>Balance</Header>
        <InputBox>
          <FaPoundSign/>
          <Input placeholder='0' onChange={e => setBalance(e.target.value)}/>
        </InputBox>
        <Header>Monthly Limit</Header>
        <InputBox>
          <FaPoundSign/>
         <Input placeholder='0' onChange={e => setMonthlyLimit(e.target.value)}/>
        </InputBox>
        <Header>Savings </Header>
        <InputBox>
          <FaPoundSign/>
          <Input placeholder='0' onChange={e => setSavings(e.target.value)}/>
        </InputBox>
        <Button type="button" onClick ={(e) => {sendDetails(e)}}> Set your Balance </Button>
        <Header>Expenses</Header>
      </IconContext.Provider>
      <IconContext.Provider value = {{style: {verticalAlign:'middle'}, size: "2em"}}>
        <Table>
          <Items> 
            <Text>Gym</Text>
            <FaDumbbell />
            <Price>£12.99</Price>
          </Items>
          <Items> 
            <Text>Rent</Text>
            <BsFillHouseDoorFill value = {{style: {verticalAlign:'middle'}}}/> 
            <Price>£12.99</Price>
          </Items>
          <Items> 
            <Text> Groceries</Text>
            <BsFillBasketFill value = {{style: {verticalAlign:'middle'}}}/> 
            <Price>£12.99</Price>
          </Items>
          <Items> 
            <Text> Travel </Text>
            <FaBusAlt value = {{style: {verticalAlign:'middle'}}}/> 
            <Price>£12.99</Price>
          </Items>
          <Items> 
            <Text> Social </Text>
            <TbGlass value = {{style: {verticalAlign:'middle'}}}/> 
            <Price>£12.99</Price>
          </Items>
          <Items> 
            <Text> Bills </Text>
            <IoMdPaper value = {{style: {verticalAlign:'middle'}}}/> 
            <Price>12.99</Price>
          </Items>
        </Table>
      </IconContext.Provider>
      <button onClick={callNot}>Click me</button>
    </Container>
  )
}

export default Home