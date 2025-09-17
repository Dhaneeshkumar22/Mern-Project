import React from 'react';

export default function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <div>
      <h3>Expense List</h3>
      {expenses.map((item) => (
        <div key={item.id}>
          {item.title} - {item.amount}
          <button onClick={() => deleteExpense(item._id)}>Delete</button>
          <button onClick={() => editExpense(item)}>Edit</button>
        </div>
      ))}
    </div>
  );
}