// should set default state
// should remove expesne by id
// should not remove expenses if id not found

import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expeneses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'new Mac',
    note: 'super awesome',
    amount: 300,
    createdAt: moment().add(1, 'year'),
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an expense
test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Department Rent',
      amount: 21900,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.map((expense) => (
    expense.id === action.id ? 
    { ...expense, ...action.updates } : expense
  )));
});

// should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'credit card',
      amount: 300,
    }
  };
  // const uneditedExpense = expenses.find(({id}) => id === action.id);
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});