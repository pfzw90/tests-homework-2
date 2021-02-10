export default function sortByHealth(characters) {
  const sortedChars = [];
  characters.forEach((char) => {
    sortedChars.push({ ...char });
  });
  sortedChars.sort((a, b) => b.health - a.health);

  return sortedChars;
}
