const { isPalindrome } = require("../utils");

describe("isPalindrome", () => {
  test('returns true for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns false for "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test('returns true for mixed case "RaceCar"', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("returns false for empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  describe("bonus tests", () => {
    test("throws error for non-alphabetic characters", () => {
      expect(() => isPalindrome("race car")).toThrow();
    });

    test("throws error for non-string input", () => {
      expect(() => isPalindrome(123)).toThrow();
    });
  });
});
