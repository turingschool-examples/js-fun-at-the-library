function createTitle(bookIdea) {
  return `The ${bookIdea}`
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter
}

function saveReview(reviewString, reviewIndex) {
  for (i = 0; i <= reviewIndex.length; i++) {
    if (reviewString === reviewIndex[i]) {
      return false
    } else {
      return reviewIndex.push(reviewString)
    }
}
}

function calculatePageCount(title) {
  var pageCount = title.length * 20
  return  pageCount
}

function writeBook(title, mainCharacter, genre) {
  var theBook = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return theBook
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * (3/4)
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
