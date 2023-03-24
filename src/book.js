function createTitle(bookName) {
  bookIdea = `The ${bookName}`;
  return bookIdea;
}

function buildMainCharacter(name, age, pronouns) {
  mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}