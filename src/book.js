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

function writeBook(title, mainCharacter) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title)
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}