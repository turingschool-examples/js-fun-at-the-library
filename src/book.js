function createTitle(title) {
  bookIdea = `The ${title}`;
  return bookIdea;
};

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
};

function calculatePageCount(title) {
  var bookPageCount = title.length * 20;
  return bookPageCount;
};

function writeBook(title, mainCharacter, genre) {
  var bookInfo = {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
  }
  return bookInfo;
};

function editBook(bookInfo) {
  console.log(bookInfo)
  bookInfo.pageCount = bookInfo.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};