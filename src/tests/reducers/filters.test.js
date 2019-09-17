import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'hello',
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('hello');
});

// should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment().subtract(2, 'month');
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

// should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment().add(1, 'month');
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});