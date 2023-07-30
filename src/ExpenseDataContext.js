import React, { createContext, useReducer } from 'react';

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'shopping', cost: 400 },
    { id: 2, name: 'Mobile Recharge', cost: 500 },
    { id: 3, name: 'Electricity', cost: 700 },
  ],
};
//NOTE: the intialState properties do not need to have values, they can be set to empty strings, empty arrays, and so on. We're adding data for visual purposes

export const ExpenseDataContext = createContext();

export const ExpenseDataProvider = (props) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  return (
    <ExpenseDataContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </ExpenseDataContext.Provider>
  );
};
