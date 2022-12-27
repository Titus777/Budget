import { useState} from "react";

import {
  doc,
  addDoc,
  collection,
  getDocs,
 getFirestore
} from "firebase/firestore";

function useExpense() {
  const db = getFirestore();
  const ref2 = collection(db,"moneyIn")
  const ref = collection(db, "expenses")
  const createExpenses = (expenses) => addDoc(ref, expenses);
  const createMoneyIn = (moneyIn) => addDoc(ref2,moneyIn)

  const getExpenses = () => getDocs(ref);
  const getMoney = () => getDocs(ref2)

  return {createExpenses,createMoneyIn,getExpenses,getMoney}
}

export default useExpense;
