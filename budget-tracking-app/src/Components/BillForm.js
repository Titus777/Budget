import React from 'react'
import {MdGraphicEq} from "react-icons/md"
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useExpense from '../services/firebase/useExpense';

const BillContainer = styled.form`
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  height: fit-content;
  width: 40vh;
  border: solid grey;
  margin: 2em;
  flex: 33;
`

const BillInfo = styled.input`
  display: flex;
  flex: 20%;
  flex-direction: ${props => props.title ? "column": "row"};
  align-items: center;
  justify-content: center;
`


function BillForm(auth) {
    const {createBills} = useExpense()
    const schema = yup.object().shape({
        title: yup
          .string()
          .required("password is required")
          .min(2, "password must be a a longer than two letters"),
        date : yup
          .number()
          .required("Day of the bill(exclude 31) is required")
          .typeError("Wrong type (you've entered an empty field/incomptaible character)")
          .min(1)
          .max(30),
        amount: yup
            .number()
            .required("value is required")
            .typeError("Wrong type (you've entered an empty field/incomptaible character)")
            .min(0)
      })
    
      const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({ resolver: yupResolver(schema) })

    const createBill = async (data) =>{
        console.log(data)
        const bill = {
          user: auth.auth,
          createdAt: new Date().toLocaleString(),
          bills:data
        }
        try{
            await createBills(bill)
        }catch(e){
            console.log(e)
        }
        
      }
  return (
    <BillContainer onSubmit={handleSubmit(createBill)}>
        <p>{errors.title && errors.title?.message} </p>
        <BillInfo title type="text" placeholder='Title' {...register("title")}/>
        <p>{errors.date && errors.date?.message} </p>
        <BillInfo type="number" {...register("date")}/>
        <p>{errors.amount && errors.amount?.message} </p>
        <BillInfo price type="number" step="any" placeholder="Full Amount" {...register("amount")}/>
        <BillInfo type ="submit" value="Submit"/>
    </BillContainer>
  )
}

export default BillForm