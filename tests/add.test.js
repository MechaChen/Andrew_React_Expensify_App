const add = (a, b) => a + b + 1;

test("should add two number.", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});
