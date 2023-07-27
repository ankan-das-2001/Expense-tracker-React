import React from 'react';
import ExpenseItem from "./expenseItem"

export default function ExpenseList(props) {
  const expenses= [     // dummy list of expenses, we need to add edit functionality 
    {id: 1, name:"Shopping", cost:40},
    {id: 2, name:"Food", cost:100},
    {id: 3, name:"medicine", cost:50}
  ];
  return(
    <ul className="list-group">
      {expenses.map((expense)=>(
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  )

}
