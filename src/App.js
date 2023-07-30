import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Headers from './components/header';
import ExpenseList from './components/expenseList';
import ExpensesTotal from './components/expensesTotal';
import Budget from './components/budget';
import Remaining from './components/remaining';
import AddExpense from './components/addExpense';

//context
import { ExpenseDataProvider} from './ExpenseDataContext';
//https://www.freecodecamp.org/news/react-budget-tracker-app/
export default function App() {
  return (
    <ExpenseDataProvider>
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
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </div>
    </ExpenseDataProvider>
  );
}
