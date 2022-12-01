function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns){
  return {
    name: name,
    age: age,
    pronouns: pronouns
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

function editBook(){

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}