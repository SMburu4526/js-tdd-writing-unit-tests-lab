function isPalindrome(str) {
  if (str === "") {
    return false;
  }

  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  if (!/^[A-Za-z]+$/.test(str)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  const lowerStr = str.toLowerCase();
  return lowerStr === lowerStr.split("").reverse().join("");
}

module.exports = { isPalindrome };
