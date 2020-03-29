export const truncateStringAndAddThreeDots = (stringToTruncate, size) => {
  stringToTruncate = stringToTruncate.toString();

  const stringLength = stringToTruncate.length;

  if (stringLength <= size) return stringToTruncate;

  return `${stringToTruncate.substr(0, size - 3)}...`;
};
