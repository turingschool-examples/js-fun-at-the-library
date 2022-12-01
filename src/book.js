function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns){
  return {
    name: name,
    age: age,
    pronouns: pronouns 
  }
}

function saveReview(review, array){
  if(array.indexOf(review) === -1){
  array.push(review)
  }
}

function calculatePageCount(title){
  return (title.length * 20)
}

function writeBook(title, mainCharacter, genre){
  return book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book){
  return book.pageCount = book.pageCount * .75 
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}