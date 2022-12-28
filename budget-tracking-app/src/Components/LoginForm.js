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
    border-right: double black;
    border-radius: 20%
`

const Label = styled.label`
    margin: 1vh;
    padding: 5px;
    

`

const Input = styled.input`
    width: ${props => props.btn ? "40%": "70%"};
    padding: ${props => props.btn ? "1.5vh": "1vh"};
    margin-top: ${props => props.btn ? "10vh": "0"};
    border-radius: 40%;
 
`


function LoginForm() {
  const {signIn} = useAuth()
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("password is required")
      .min(2, "password must be a a longer than two letters"),
    email : yup
      .string()
      .email()
      .required("Email is required")
      .min(3,"Minimum of 3 characters")
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    try{
      const {email,password} = data
      await signIn(email,password)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.email && errors.email?.message}</p>
        <Label htmlfor="email">Username</Label>
        <Input {...register("email")} type="text"/>
        <p>{errors.password && errors.password?.message}</p>
        <Label htmlfor="password" >Password</Label>
        <Input {...register("password")} type="password"/>
        <Input btn type="submit" value="Sign In"/>
    </Form>
  )
}

export default LoginForm