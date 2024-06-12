
function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character1 = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character1;
}

function saveReview(criticism, rating) {
  if(!rating.includes(criticism)) {
    rating.push(criticism)
  }
  return rating;
}

function calculatePageCount(bookName) {
  var numOfPage = `${bookName}`.length;
  var totalPage = numOfPage * 20;
  return totalPage;
}

function writeBook(aboutBook, person, category) {
  var novel = {
    title: aboutBook,
    mainCharacter: person,
    pageCount: calculatePageCount(aboutBook),
    genre: category
  }
  return novel
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * 0.75;
  return bookTitle;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}


