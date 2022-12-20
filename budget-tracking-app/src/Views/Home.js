import React from 'react'
import styled from "styled-components"
import {FaDumbbell, FaBusAlt} from "react-icons/fa"
import {BsFillHouseDoorFill,BsFillBasketFill} from "react-icons/bs"
import {TbGlass} from "react-icons/tb"
import {IoMdPaper} from "react-icons/io"


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

const Input = styled.input`
  background: hsl(223, 0%, 93%);
  border: none;
  width: 30vh;
  height: 5vh;
  text-indent: 20px;
`

const Table = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding:2vh;
`

const Items = styled.div`
  display:grid;
  border: 1px solid rgba(0,0,0,0.8);
  padding: 20px;
  margin: 0px;
  text-align:center;
  items-algin:center;
  justify-content:center;
  

`
const Text = styled.div`
  font-style: italic;
  text-size:10px;
`

function Home() {
  return (
    <Container>
      <Header>Balance</Header>
      <Input/>
      <Header>Monthly Limit</Header>
      <Input/>
      <Header>Savings </Header>
      <Input/>
      <Header>Expenses</Header>
      <Table>
        <Items> 
          <Text>Gym</Text>
          <FaDumbbell value = {{style: {verticalAlign:'middle'}}}/> 
          $12.99
        </Items>
        <Items> 
          <Text>Rent</Text>
          <BsFillHouseDoorFill value = {{style: {verticalAlign:'middle'}}}/> 
          $12.99
        </Items>
        <Items> 
          <Text> Groceries</Text>
          <BsFillBasketFill value = {{style: {verticalAlign:'middle'}}}/> 
          $12.99
        </Items>
        <Items> 
          <Text> Travel </Text>
          <FaBusAlt value = {{style: {verticalAlign:'middle'}}}/> 
          $12.99
        </Items>
        <Items> 
          <Text> Social </Text>
          <TbGlass value = {{style: {verticalAlign:'middle'}}}/> 
          $12.99
        </Items>
        <Items> 
          <Text> Bills </Text>
          <IoMdPaper value = {{style: {verticalAlign:'middle'}}}/> 
          $12.99
        </Items>
      </Table>

    </Container>
  )
}

export default Home