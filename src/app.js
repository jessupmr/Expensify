import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import confugureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = confugureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 12900, createdAt: 21000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 4200, createdAt: 21500}));
store.dispatch(setTextFilter('gas'));

ReactDOM.render(<AppRouter />, document.getElementById('app')); 