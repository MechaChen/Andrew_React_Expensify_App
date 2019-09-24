export default (expenses) => (expenses.reduce(
  (accu, cur) => accu + cur.amount
  , 0)
);