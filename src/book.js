function createTitle(bookName) {
  bookIdea = `The ${bookName}`;
  return bookIdea;
}

function buildMainCharacter(name, age, pronouns) {
  var name = name;
  var age = age;
  var pronouns = pronouns;
  return name, age, pronouns;
}
module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}