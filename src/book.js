function createTitle(bookIdea) {
  return `The ${bookIdea}` 
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
    reviews: []
  }
  return character
}  
// function saveReview(review, reviews) {
//   for (var i = 0; i < reviews.length; i++) {
//     if (!review === reviews[i]) {
//       reviews.push(review);
//     } else {
//       return reviews;
//     }
//   }
// }
function saveReview(review, reviews) {
  var isDuplicate = false;
  for (var i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    reviews.push(review);
  }
  return reviews;
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
} 

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book
}

function editBook(bookTitle) {
  var sum = bookTitle.pageCount *= .75
  return sum
   
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}