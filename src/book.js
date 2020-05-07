function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name, age, pronouns,
  }
}

function saveReview(review, reviews) {
  reviews.includes(review) ? reviews : reviews.push(review);
  //reviews.push(review);
}

function calculatePageCount() {
  
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}



// //  #1

// //  npm test test/book-test.js