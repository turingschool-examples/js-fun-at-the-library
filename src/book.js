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
};

function saveReview(review, reviews) {
  var reviews = reviews;
  if(!reviews.includes(review)) {
    reviews.push(review);
    return reviews;
  }
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}