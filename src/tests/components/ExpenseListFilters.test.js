import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate, 
    wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text filter', () => {
  const value = 'rent';
  wrapper
    .find('input')
    .simulate('change', {
      target: { value },
    });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by amount
test('should sort by amount', () => {
  const value = 'amount';
  wrapper
    .find('select')
    .simulate('change', {
      target: { value },
    });

  expect(sortByAmount).toHaveBeenCalled();
});

// should sort by date
test('should sort by date', () => {
  const value = 'date';
  wrapper
    .setProps({ filters: altFilters })
    .find('select')
    .simulate('change', {
      target: { value },
    });

  expect(sortByDate).toHaveBeenCalled();
});

// should handle date changes
test('should handle date changes', () => {
  const startDate = moment(0).subtract(2, 'days');
  const endDate = moment(0).add(2, 'days');
  wrapper
    .find('DateRangePicker')
    .prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes
test('should handle date focus changes', () => {
  const focused = 'startDate'; // can be null || 'startDate' || 'endDate'
  wrapper
    .find('DateRangePicker')
    .prop('onFocusChange')(focused);

  expect(wrapper.state('calendarFocused')).toBe(focused);
});