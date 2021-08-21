
//Function to add "The " at the beginning of a title.
// function createTitle(title) {
//     var modifiedTittle = "The " + title;
//     return modifiedTittle;
// };

// Arrow function

const createTitle = title => 'The ' + title;

// Function to build a Main Character object with 3 properties.
// function buildMainCharacter(name, age, pronouns) {
//       var newMainCharacter = {
//         name: name,
//         age: age,
//         pronouns: pronouns,
//       };
//       return newMainCharacter;

// };

const buildMainCharacter = (name, age, pronouns) => ({ name, age, pronouns });

// Function to save new reviews in an array, without repeating any review.
// function saveReview(newReview, reviews) {
//     for (var i = 0; i < reviews.length; i++) {
//       if (reviews[i] === newReview) {
//          return reviews
//       }
        
//     };
//     return reviews.push(newReview);
// };

const saveReview = (newReview, reviews) => (
  !reviews.includes(newReview) ? reviews.push(newReview): reviews
)

// Function to add 20 pages per letter in the title.
// function calculatePageCount(title) {
//     var pageCount = title.length * 20;
//     return pageCount;
// };

const calculatePageCount = title => title.length * 20;

// Function that creates an book object.
// function writeBook(bookTitle, bookCharacter, genre) {
//     var newBook = {
//       title: bookTitle,
//       mainCharacter: bookCharacter,
//       genre: genre,
//       pageCount: calculatePageCount(bookTitle),
//     };
//     return newBook;
// };

const writeBook = (bookTitle, bookCharacter, genre) => ({
  title: bookTitle,
  mainCharacter: bookCharacter,
  genre,
  pageCount: calculatePageCount(bookTitle)
});

// Function that decrease by 1/4 the pageCount.
// function editBook(newBook) {
//     newBook.pageCount = newBook.pageCount * 0.75;
//   };

const editBook = newBook => newBook.pageCount = newBook.pageCount * 0.75;


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
