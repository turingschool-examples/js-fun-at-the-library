function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return newCharacter;
};

function saveReview(text, reviews) {
  if (reviews.length === 0) {
    reviews[0] = text;
  } else {
      for (var i = 0; i < reviews.length; i++) {
        if(reviews.indexOf(text) === -1) {
        reviews.push(text);
        }
      }
    }
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
};

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * .75;
};
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
