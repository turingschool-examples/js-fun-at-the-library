function createTitle(bookIdea) {
  return ("The " + bookIdea);
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

function saveReview(review , reviews) {
  if (reviews.includes(review) === false)
  {reviews.push(review)};
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre){
  return {title:bookTitle,
          mainCharacter:bookCharacter,
          pageCount:calculatePageCount(bookTitle),
          genre:genre,}
};

function editBook(bookTitle) {
bookTitle.pageCount = bookTitle.pageCount * .75;
};



module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
