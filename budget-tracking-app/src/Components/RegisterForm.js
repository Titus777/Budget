import React from 'react'
import styled from 'styled-components'
import useAuth from "../services/firebase/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


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

function RegisterForm() {
  const {createUser} = useAuth()
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("email is not valid")
      .required("you must enter an email"),
    password: yup
      .string()
      .required("password is required")
      .min(2, "password must be a a longer than two letters"),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const inSubmit = async (data) => {
    try{
      const {email,password} = data
      await createUser(email,password)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <Form onSubmit={handleSubmit(inSubmit)}>
        <p>{errors.email && errors.email?.message}</p>
        <Label htmlfor="email" >Email</Label>
        <Input {...register("email")} type = "text"/>
        <p>{errors.password && errors.password?.message}</p>
        <Label htmlfor="password" >Password</Label>
        <Input {...register("password")} type="password"/>
        <Input btn type="submit" value="Register NOW!"/>
    </Form>
  )
}

export default RegisterForm