
// Function to add "The " at the beggining of a title.
function createTitle(title) {
    var modifiedTittle = "The " + title;
    return modifiedTittle;
}
// Funtion to build a Main Character object with 3 properties
function buildMainCharacter(name, age, pronouns) {
      var newMainCharacter = {
        name: name,
        age: age,
        pronouns: pronouns,
      }
      return newMainCharacter;

}
// Function to save new reviews in an array, without repeating any review.
function saveReview(newReview, reviews) {
    if (reviews.includes(newReview) === false) {
      reviews.push(newReview);
    };
}
// Function to add 20 pages per letter in the title.
function calculatePageCount(title) {
    var pageCount = title.length * 20;
    return pageCount;
}
// Function that creates an book object.
function writeBook(bookTitle, bookCharacter, genre) {
    var newBook = {
      title: bookTitle,
      mainCharacter: bookCharacter,
      genre: genre,
      pageCount: calculatePageCount(bookTitle),
    };
    return newBook;
}
// Function that decrease by 1/4 the pageCount.
function editBook(newBook) {
    newBook.pageCount = newBook.pageCount * 0.75;
  }


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
