import React,{useEffect,useRef} from 'react'
import styled from 'styled-components'
import {FaDumbbell, FaBusAlt, FaPoundSign} from "react-icons/fa"
import {BsFillHouseDoorFill,BsFillBasketFill} from "react-icons/bs"
import {TbGlass} from "react-icons/tb"
import {IoMdPaper} from "react-icons/io"
import {IconContext} from "react-icons"
import useExpense from '../services/firebase/useExpense'
import { getDocs } from 'firebase/firestore'

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

function ExpensesTracker({exp}) {
 
  console.log(exp)
  return (
    <div>
        <Table>
            <IconContext.Provider value = {{size:"2em",style:{justifyContent: 'center',alignSelf:"center"}}}>
                <Items> 
                    <Text>Gym</Text>
                    <FaDumbbell />
                    <Price>{exp ? `£${exp.gym}`: "0"}</Price>
                </Items>
                <Items> 
                    <Text>Rent</Text>
                    <BsFillHouseDoorFill value = {{style: {verticalAlign:'middle'}}}/> 
                    <Price>{exp ? `£${exp.rent}`: "0"}</Price>
                </Items>
                <Items> 
                    <Text> Groceries</Text>
                    <BsFillBasketFill value = {{style: {verticalAlign:'middle'}}}/> 
                    <Price>{exp ? `£${exp.groceries}`: "0"}</Price>
                </Items>
                <Items> 
                    <Text> Travel </Text>
                    <FaBusAlt value = {{style: {verticalAlign:'middle'}}}/> 
                    <Price>{exp ? `£${exp.travel}`: "0"}</Price>
                </Items>
                <Items> 
                    <Text> Social </Text>
                    <TbGlass value = {{style: {verticalAlign:'middle'}}}/> 
                    <Price>{exp ? `£${exp.social}`: "0"}
                    </Price>
                </Items>
                <Items> 
                    <Text> Bills </Text>
                    <IoMdPaper value = {{style: {verticalAlign:'middle'}}}/> 
                    <Price>{exp ? `£${exp.bills}`: "0"}</Price>
                </Items>
            </IconContext.Provider>
        </Table>
    </div>
  )
}

export default ExpensesTracker