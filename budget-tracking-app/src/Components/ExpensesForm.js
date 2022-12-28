import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useExpense from '../services/firebase/useExpense';
import { getAuth } from 'firebase/auth';
import createNotification from '../assets/notification';

const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: 100%;
  margin:auto auto auto;
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:70%;
    height:100%;
    align-items:center;
    justify-content:center;
`

const Label = styled.label`
    margin: 1vh;
    padding: 3px;

`

const Input = styled.input`
    width: ${props => props.btn ? "40%": "70%"};
    padding: ${props => props.btn ? "1.5vh": "1vh"};
    margin-top: ${props => props.btn ? "6vh": "1vh"};
    border-radius: 40px;

`
function ExpensesForm() {
  const {createExpenses} = useExpense()
  const auth = getAuth()
  const schema = yup.object().shape({
    gym: yup
      .string()
      .required()
      .min(1, "Please format them `22.44`"),
    rent: yup
    .string()
    .required()
    .min(1, "Please format them `22.44`"),
    groceries: yup
    .string()
    .required()
    .min(1, "Please format them `22.44`"),
    travel: yup
    .string()
    .required()
    .min(1, "Please format them `22.44`"),
    social: yup
    .string()
    .required()
    .min(1, "Please format them `22.44`")
    
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const inSubmit = async (data) => {
   
    try{
      const {gym,rent,groceries,travel,social} = data
      const filledData= {
        user: auth.currentUser.email,
        expenses:{
        gym: +gym,
        rent: +rent,
        groceries: +groceries,
        travel: +travel,
        social: +social,
        },
        createdAt: new Date().toString()
        }
      await createExpenses(filledData)
      createNotification("Success","Succesfull sent your expenses")
    }catch(e){
      createNotification("Error",`${e}`)
      console.log(e)
    }
  }


  return (
    <Container>
        <Form onSubmit={handleSubmit(inSubmit)}>
          <h3>{errors && errors?.message}</h3>
            <Label>Gym </Label>
            <Input {...register("gym")} type="number" step="any"/>
            <Label>Rent </Label>
            <Input {...register("rent")} type="number" step="any"/>
            <Label>Groceries </Label>
            <Input {...register("groceries")} type="number" step="any"/>
            <Label>Travel </Label>
            <Input {...register("travel")} type="number" step="any"/>
            <Label>Social </Label>
            <Input {...register("social")} type="number" step="any"/>
            <Input btn type="submit" value="Save"/>
        </Form>
        
    </Container>
  )
}

export default ExpensesForm