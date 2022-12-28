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

  const createExpenses = (expenses) => addDoc(ref, expenses);
  const createMoneyIn = (moneyIn) => addDoc(ref2,moneyIn)

  const getExpenses = () => getDocs(ref);
  const getMoney = () => getDocs(ref2)
  
  const getLastExpense = (email) => query(ref, where("user", "==",email),orderBy("createdAt","desc"), limit(1))
  const getLastMoneyIn = (email) => query(ref2, where("user", "==",email),orderBy("createdAt","desc"), limit(1))

  return {createExpenses,createMoneyIn,getExpenses,getMoney,getLastExpense,getLastMoneyIn}
}

export default useExpense;
