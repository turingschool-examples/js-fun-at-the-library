function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name1, age1, pronouns1){
  return {
    name: name1,
    age: age1,
    pronouns: pronouns1
  }
};

function saveReview(newReview, array){
    if(array.includes(newReview) === false){
      array.push(newReview)
    }
  // console.log(reviews)
  // console.log(reviews.length)
};

function calculatePageCount(bookTitle){
  return bookTitle.length * 20
};

function writeBook(newBook, newChar, newGenre){
  return {
    title: newBook, 
    mainCharacter: newChar,
    pageCount: calculatePageCount(newBook),
    genre: newGenre
}
};

function editBook(bookObject){
  bookObject.pageCount = bookObject.pageCount *.75
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}