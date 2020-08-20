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
  if (reviews.includes(rev)==false) {
    reviews.push(rev)
    }
}

function calculatePageCount(title) {  
  return (title.length*20)
}

function writeBook(title,character,genre) {
  return {
    title:title,
    mainCharacter:character,
    pageCount:calculatePageCount(title),
    genre:genre,
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