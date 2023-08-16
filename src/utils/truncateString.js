export function truncate(inputString, maxLength, separator = "...") {
  if (inputString.length <= maxLength) {
    return inputString;
  }

  const truncatedString = inputString.substring(0, maxLength) + separator;

  return truncatedString;
}
