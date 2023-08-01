import React, { createContext, useReducer } from 'react';

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'EDIT_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense)=> expense.id!=action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [],
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
