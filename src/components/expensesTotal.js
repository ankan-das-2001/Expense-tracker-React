import React, { useContext } from 'react';
import { ExpenseDataContext } from '../ExpenseDataContext';

export default function ExpensesTotal(props) {
  const { expenses } = useContext(ExpenseDataContext);

  const totalExpenses = expenses.reduce((total, item) => {
    if (item.cost != null) return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: Rs.{totalExpenses}</span>
    </div>
  );
}
