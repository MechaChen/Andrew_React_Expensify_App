import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

test('should render AddExpesePage', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  );
  wrapper
    .find('ExpenseForm')
    .simulate('submit', expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
});