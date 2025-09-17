import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { v4 as uid } from "uuid";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { useEffect } from "react";
import axios from 'axios';

const EXPENSES = [
  { id: uid(), title: "Expense 1", amount: 100 },
  { id: uid(), title: "Expense 2", amount: -200 },
];

export default function ExpenseTrack() {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [itemToEdit, setItemToEdit] = useState(null);
  useEffect(()=>{
     axios.get ("https://mern-backend-project-7.onrender.com/")
     .then((res)=> setExpenses(res.data))
    
  },[])

  const addExpense = (title, amount, id = null) => {
    if (id) {
      axios.put(`https://mern-backend-project-7.onrender.com/${id}`, { title, amount: Number(amount) })
        .then((res) => {
          const updatedList = expenses.map((exp) =>
            exp._id === id ? res.data : exp
          );
          setExpenses(updatedList);
          setItemToEdit(null);
        })
        .catch((err) => console.error("Update error:", err));
    } else {
      axios.post("https://mern-backend-project-7.onrender.com", { title, amount: Number(amount) })
        .then((res) => setExpenses([...expenses, res.data]))
        .catch((err) => console.error("Add error:", err));
    }
  };

  const deleteExpense = (id) => {
   axios.delete(`https://mern-backend-project-7.onrender.com/${id}`)
   .then(()=>{
    setExpenses(expenses.filter((exp) => exp._id !== id));
   })
   .catch((err)=>console.log(err))
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm addExpense={addExpense} itemToEdit={itemToEdit} />
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={setItemToEdit}
      />
      <ExpenseSummary proexpenses={expenses} />
    </div>
  );
}
