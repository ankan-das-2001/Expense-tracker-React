import React, {useContext} from 'react';
import {ExpenseDataContext} from "../ExpenseDataContext";

export default function Remaining(props) {
  const {budget,expenses} = useContext(ExpenseDataContext);

  const totalExpense = expenses.reduce((total,item)=>{
    return (total+=item.cost);
  },0);

  const alertType = totalExpense> budget? 'alert-danger': 'alert-info';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: Rs. {budget-totalExpense}/-</span>
    </div>
  );
}
