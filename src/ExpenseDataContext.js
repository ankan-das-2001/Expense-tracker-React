const expenseList = {
  budget: 2000,
  expenses: [
    { id: 1, name: 'shopping', cost: 400 },
    { id: 1, name: 'holiday', cost: 300 },
  ],
};
//NOTE: the intialState properties do not need to have values, they can be set to empty strings, empty arrays, and so on. We're adding data for visual purposes

export const ExpenseDataContext = createContext();

export const expenseData = (props) => {
  const [state, dispatch] = useReducer(ExpenseDataContext, expenseList);
};
