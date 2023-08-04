import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer();
};
