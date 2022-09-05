const { describe, expect, test } = require('@jest/globals');
const sum = require('./sum.js');

describe('sum operation', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
