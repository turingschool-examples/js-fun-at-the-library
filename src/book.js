function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
    return {
  name: name,
  age: age,
  pronouns: pronouns
  }
}

function saveReview(addReview, array) {
  if (array.includes(addReview) === false) {
    return array.push(addReview)
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
  }
  
  function writeBook(newBook, newCharacter, newType) {
    return {
      title: newBook,
      mainCharacter: newCharacter,
      pageCount: calculatePageCount(newBook),
      genre: newType
    }
  }

function editBook(pageCount) {
  bookPages: pageCount * .75;
  return pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}