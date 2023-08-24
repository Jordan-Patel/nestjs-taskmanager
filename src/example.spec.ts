function addNumbers(num1, num2) {
  return num1 + num2;
}

describe('addNumbers', () => {
  it('should add two numbers', () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
});
