//    editBook
  //    - should be a function
  //    - should decrease the book's page count to be three quarters of what it originally was
  //    - should decrease a different book's page count to be three quarters of what it originally was


//  0 passing (5ms)
//  18 pending

function createTitle(title) {
return ("The " + title);
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,};
  return character;
};

function saveReview(newReviews, reviews)
{
if (reviews.includes(newReviews)) {
  return reviews;
} else {
  return reviews.push(newReviews);
}
};

function calculatePageCount(bookPageCount) {
return bookPageCount.length * 20;
};

function writeBook(title, bookCharacter, calculatePageCount, genre) {
  var book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount,
    genre: genre,
  };

  return book;
};

function editBook(book) {
return book.pageCount * .75;  
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
 calculatePageCount,
writeBook,
editBook
}
