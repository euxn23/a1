import { a1ToNumber } from './a1-to-number';

describe('A1 to number convert', () => {
  describe('with one-based-index', () => {
    it('should success', () => {
      expect(a1ToNumber('A')).toBe(1);
      expect(a1ToNumber('Z')).toBe(26);
      expect(a1ToNumber('AA')).toBe(27);
      expect(a1ToNumber('AB')).toBe(28);
      expect(a1ToNumber('AZ')).toBe(52);
      expect(a1ToNumber('BA')).toBe(53);
      expect(a1ToNumber('BB')).toBe(54);
      expect(a1ToNumber('ZA')).toBe(677);
      expect(a1ToNumber('ZZ')).toBe(702);
      expect(a1ToNumber('AAA')).toBe(703);
      expect(a1ToNumber('ZZZ')).toBe(18278);
      expect(a1ToNumber('AAAA')).toBe(18279);
    });
  });

  describe('with zero-based-index', () => {
    function a1ToNumberWithZeroBasedIndex(a1: string) {
      return a1ToNumber(a1, true);
    }

    it('should success', () => {
      expect(a1ToNumberWithZeroBasedIndex('A')).toBe(0);
      expect(a1ToNumberWithZeroBasedIndex('Z')).toBe(25);
      expect(a1ToNumberWithZeroBasedIndex('AA')).toBe(26);
      expect(a1ToNumberWithZeroBasedIndex('AB')).toBe(27);
      expect(a1ToNumberWithZeroBasedIndex('AZ')).toBe(51);
      expect(a1ToNumberWithZeroBasedIndex('BA')).toBe(52);
      expect(a1ToNumberWithZeroBasedIndex('BB')).toBe(53);
      expect(a1ToNumberWithZeroBasedIndex('ZA')).toBe(676);
      expect(a1ToNumberWithZeroBasedIndex('ZZ')).toBe(701);
      expect(a1ToNumberWithZeroBasedIndex('AAA')).toBe(702);
      expect(a1ToNumberWithZeroBasedIndex('ZZZ')).toBe(18277);
      expect(a1ToNumberWithZeroBasedIndex('AAAA')).toBe(18278);
    });
  });
});
