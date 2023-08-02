import React, { useContext } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Headers from './components/header';
import ExpenseList from './components/expenseList';
import ExpensesTotal from './components/expensesTotal';
import Budget from './components/budget';
import Remaining from './components/remaining';
import AddExpense from './components/addExpense';
import AddBudget from './components/addBudget';

//context
import { ExpenseDataContext } from './ExpenseDataContext';
//https://www.freecodecamp.org/news/react-budget-tracker-app/
export default function App() {
  const { expenses } = useContext(ExpenseDataContext);
  const objectLength = Object.entries(expenses).length;
  var expense = '';
  if (objectLength == 0) {
    expense = '';
  } else {
    expense = 'Expense';
  }
  return (
    <div className="container">
      <div className="mt-4">
        <Headers />
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpensesTotal />
        </div>
        <h3 className="mt-3">{expense}</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>
      <h3 className="mt-3">Add Budget</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddBudget />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </div>
  );
}
