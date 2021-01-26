// ---Commit out is Mod1 code.---
// function createTitle(title) {
//   return `The ${title}`;
// }
const createTitle = title => `The ${title}`;

// function buildMainCharacter(name, age, pronouns) {
//   return {
//     name: name,
//     age: age,
//     pronouns: pronouns,
//   }
// }

const buildMainCharacter = (name, age, pronouns) => ({name: name, age: age, pronouns: pronouns});

// function saveReview(rev, reviews) {
//   if (reviews.length === 0) {
//         reviews.push(rev);
//   } else {
//     for (i = 0; i < reviews.length; i++) {
//       if (rev === reviews[i]) {
//         var matched = true;
//       }
//     }
//     if (matched !== true) {
//       reviews.push(rev);
//     }
//   }
// }

// refactor with includes array method
// function saveReview(rev, reviews) {
//   if (reviews.includes(rev) === false) {
//     reviews.push(rev);
//   }
// }

const saveReview = (rev, reviews) => {
  if (reviews.includes(rev) === false) {
    reviews.push(rev);
  }
}

// function calculatePageCount(bookTitle) {
//   return bookTitle.split("").length * 20;
// }

const calculatePageCount = bookTitle => bookTitle.split('').length * 20;

// function writeBook(bookTitle, bookCharacter, genre) {
//   var book = {
//     title: bookTitle,
//     mainCharacter: bookCharacter,
//     pageCount: calculatePageCount(bookTitle),
//     genre: genre
//   }
//   return book;
// }

const writeBook = (bookTitle, bookCharacter, genre) => ({title: bookTitle, mainCharacter: bookCharacter, pageCount: calculatePageCount(bookTitle), genre: genre});

// function editBook(book){
//   book.pageCount = book.pageCount * .75;
// }

const editBook = book => book.pageCount = book.pageCount * .75;

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
