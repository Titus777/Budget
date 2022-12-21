import React from 'react'
import styled from "styled-components"
import {FaDumbbell, FaBusAlt, FaPoundSign} from "react-icons/fa"
import {BsFillHouseDoorFill,BsFillBasketFill} from "react-icons/bs"
import {TbGlass} from "react-icons/tb"
import {IoMdPaper} from "react-icons/io"
import {IconContext} from "react-icons"


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
const Price = styled(Text)`

`

function Home() {
  return (
    <Container>
      <IconContext.Provider value={{size:"1.15em",style:{justifyContent: 'center',alignSelf:"center", paddingLeft: "1em"}}}>
        <Header>Balance</Header>
        <InputBox>
          <FaPoundSign/>
          <Input placeholder='0'/>
        </InputBox>
        <Header>Monthly Limit</Header>
        <InputBox>
          <FaPoundSign/>
         <Input placeholder='0'/>
        </InputBox>
        <Header>Savings </Header>
        <InputBox>
          <FaPoundSign/>
          <Input placeholder='0'/>
        </InputBox>
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
            <Price>£12.99</Price>
          </Items>
        </Table>
      </IconContext.Provider>
    </Container>
  )
}

export default Home