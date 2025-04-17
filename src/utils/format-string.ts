export function kebabToFirstLetterUpperCase(str: string) {
  const splitWords = str.split("-");
  const formattedString = splitWords
    .map((word) => word.split("")[0].toUpperCase() + word.slice(1, str.length).toLowerCase())
    .join(" ");

  return formattedString;
}
