import { useState} from "react";

import {
  doc,
  addDoc,
  collection,
  getDocs,
 getFirestore,
 query,where,orderBy,limit, collectionGroup
} from "firebase/firestore";

function useExpense() {
  const db = getFirestore();  

  const ref2 = collection(db,"money")
  const ref = collection(db, "expenses")
  const billsRef = collection(db,"bills")

  const createExpenses = (expenses) => addDoc(ref, expenses);
  const createMoneyIn = (moneyIn) => addDoc(ref2,moneyIn)
  const createBills = (bills) => addDoc(billsRef, bills)

  const getExpenses = () => getDocs(ref);
  const getMoney = () => getDocs(ref2)
  const getMonthlyBills = (email) => query(billsRef,where("user","==",email),orderBy("createdAt","asc"))
  
  const getLastExpense = (email) => query(ref, where("user", "==",email),orderBy("createdAt","asc"), limit(1))
  const getLastMoneyIn = (email) => query(ref2, where("user", "==",email),orderBy("createdAt","asc"), limit(1))
  const getLastBills = (email) => query(billsRef,where("user", "==",email),orderBy("createdAt","asc"), limit(1))

  const billCalculator = (data) =>{
    let total = 0
    data.forEach((bill) =>{
      total = bill.bills.amount + total
    })
    return total
  }

  return {createExpenses,createMoneyIn,getExpenses,getMoney,getLastExpense,getLastMoneyIn,createBills,getLastBills,getMonthlyBills,billCalculator}
}

export default useExpense;
