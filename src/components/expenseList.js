import React, { useContext } from 'react';
import ExpenseItem from './expenseItem';
import { ExpenseDataContext } from '../ExpenseDataContext';

export default function ExpenseList(props) {
  const { expenses } = useContext(ExpenseDataContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
