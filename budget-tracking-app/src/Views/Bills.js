import React,{useEffect, useRef,useState} from 'react'
import styled from 'styled-components'
import useExpense from '../services/firebase/useExpense'
import { getAuth } from 'firebase/auth'
import { getDocs } from 'firebase/firestore'
import Bill from '../Components/Bill'
import BillForm from '../Components/BillForm'


const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: fit-content;
  margin:auto auto auto;
  overflow: scroll;
  scrollbar-width: none;
`
const Header = styled.h3`
  font-weight: bold;
  font-style: oblique;
  text-shadow: 2px 2px 5px grey;
`

const UpcomingBills = styled.div`
 margin: auto;
 padding: 0;
`

function Bills() {
  const {getMonthlyBills,getLastMoneyIn} = useExpense()
  const currentMonth = new Date().toLocaleString("default",{month: "long"})
  const [fetched, setFetch] = useState(false)
  const [addBill, setaddBill] = useState(false)
  const auth = getAuth()
  const moneyList = useRef([])
  const billsList = useRef([])

  const addForm = () =>{
    if(addBill){
      setaddBill(false)
    }
    setaddBill(true)
  }
  
  const getBills = async () =>{
    const lastMoneyIn = getLastMoneyIn(auth.currentUser?.email)
    const lastBills = getMonthlyBills(auth.currentUser?.email,currentMonth)
    
    let moneyData = []
    let billsData =[]
   
    const moneySnap = await getDocs(lastMoneyIn)
    const billsSnap = await getDocs(lastBills)
  
   
    moneySnap.forEach((doc) =>{
      let data = doc.data()
      moneyData.push(data)
    })
    billsSnap.forEach((doc) =>{
      let data = doc.data()
      console.log(data.bills)
      billsData.push(data)
    })
    moneyList.current = moneyData[0].userbalance
    billsList.current = billsData
    console.log(billsList.current)

    if(!moneyList.current){
      setFetch(false)
    }
    setFetch(true)
  }    

  useEffect(() => {
    getBills()
  },[fetched])

  console.log(billsList.current)
  billsList.current.map((bill)=>{
    console.log(bill.bills)
  })

  return (
    <Container>
        <UpcomingBills>
            <Header>Your upcoming bills: </Header>
            {billsList.current? billsList.current.map((bill) =>{
              return <Bill {...bill.bills} currentMonth= {currentMonth}/> 
            }): <h3>Please insert your own bills.</h3>}
            {addBill ? <BillForm auth={auth.currentUser?.email}/> : <div></div>}
        </UpcomingBills>
        <button onClick={addForm}> Add/edit bills</button>
    </Container>
  )
}

export default Bills