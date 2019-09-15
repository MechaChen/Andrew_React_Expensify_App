const add = (a, b) => a + b;

// [CMD] yarn test -- --watch to open Watch Mode

test("should add two number.", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});
