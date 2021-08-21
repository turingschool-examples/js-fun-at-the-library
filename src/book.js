
const createTitle = title => 'The ' + title;

const buildMainCharacter = (name, age, pronouns) => ({ name, age, pronouns });

const saveReview = (newReview, reviews) => (
  !reviews.includes(newReview) ? reviews.push(newReview): reviews
)

const calculatePageCount = title => title.length * 20;

const writeBook = (bookTitle, bookCharacter, genre) => ({
  title: bookTitle,
  mainCharacter: bookCharacter,
  genre,
  pageCount: calculatePageCount(bookTitle)
});

const editBook = newBook => newBook.pageCount = newBook.pageCount * 0.75;


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
