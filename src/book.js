function createTitle(title) {
  return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  }
}

function calculatePageCount(title) {
  return title.length * 20
}

function writeBook(title, mainCharacter, author) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    author
  }
}

function editBook(book, newPageCount) {
  book.pageCount = newPageCount
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}