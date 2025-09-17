export default function ExpenseSummary({ proexpenses }) {
  const income = proexpenses
    .filter((e) => e.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = proexpenses
    .filter((e) => e.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income + expense;

  return (
    <div>
      <h3>Expense Summary</h3>
      <p>Income: ₹{income}</p>
      <p>Expenses: ₹{Math.abs(expense)}</p>
      <p>Balance: ₹{balance}</p>
    </div>
  );
}