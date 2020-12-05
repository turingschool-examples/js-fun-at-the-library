function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(rev, reviews) {
  if (reviews.length === 0) {
        reviews.push(rev);
  } else {
    for (i = 0; i < reviews.length; i++) {
      if (rev === reviews[i]) {
        var matched = true;
      }
    }
    if (matched !== true) {
      reviews.push(rev);
    }
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.split("").length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
}

function editBook(book){
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
