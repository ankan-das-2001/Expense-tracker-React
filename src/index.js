import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ExpenseDataProvider } from './ExpenseDataContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ExpenseDataProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ExpenseDataProvider>
);
