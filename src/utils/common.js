/**
 * Capitalizes each word in the given string.
 *
 * @param {string} text The text to capitalize
 * @returns {string} The string with each word capitalized
 */
export const capitalizeEachWord = (text) => {
  let words = text.split(" ");
  words = words.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
  return words.join(" ");
};
