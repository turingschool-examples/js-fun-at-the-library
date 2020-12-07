function createTitle(bookTitle) {
  return `The ${bookTitle}`;
};

// createTitle();

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;
};

// buildMainCharacter();

function saveReview(newReview, reviews) {
  // check reviews array for an existing string of the same value
  if (reviews.includes(newReview)) {
    return reviews; }
   else {
     return reviews.push(newReview);
   };

  console.log(`reviews array`, reviews);
  return reviews;
};

// saveReview();

function calculatePageCount(bookTitle) {
  // add 20 pages per letter in the title, 1 letter = 20 pages
  // count number of letters * 20
  return bookTitle.length * 20
};

// calculatePageCount();

function writeBook(bookTitle, character, genre) {
  // return book object
  return book = {
    title: bookTitle,
    mainCharacter: character,
    pageCount: bookTitle.length * 20,
    genre: genre
  }
};

// writeBook();

function editBook(book) {
  // decrease page count to 75% of original value
  // console.log(book);
  // return ((book.pageCount) * .75); ~~ this solution didn't work
  //  AssertionError: expected 340 to equal 255
  // console.log(book.PageCount = book.pageCount * .75);
  // the console.log on line 57 shows the correct page count of 255, but the return statement shows NaN
  book.pageCount *= .75;
  // not sure why book.pageCount *= .75 works but book.pageCount = book.pageCount * .75 doesn't...
  return book.PageCount;
};

// editBook();

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
