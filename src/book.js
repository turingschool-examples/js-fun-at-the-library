function createTitle(name) {
  return `The ${name}`
}

function buildMainCharacter(name,age,pronouns){
  return {
    name:name,
    age:age,
    pronouns:pronouns,
  }
}

function saveReview(rev,reviews){
  if (!reviews.includes(rev)) {
    reviews.push(rev)
    }
}

function calculatePageCount(bookTitle) {  
  return (bookTitle.length*20)
}

function writeBook(title,mainCharacter,genre) {
  return {
    title,
    mainCharacter,
    pageCount:calculatePageCount(title),
    genre,
  }
}

function editBook(book){

  book.pageCount = book.pageCount *0.75
}



module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}