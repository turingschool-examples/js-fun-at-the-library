function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return newCharacter;
}

// buildMainCharacter is the function, parameters name, age, pronouns. newCharacters is the object.
// when running the test we are looking to access values inside of the object, this is an empty object
var reviews = [];

function saveReview(text, reviews) {
  if (reviews.length === 0) {
    reviews[0] = text;
  } else {
      for (var i = 0; i < reviews.length; i++) {
        if(reviews.indexOf(text) === -1) {
        reviews.push(text);
      }
    }
  }
};
//.push - the array method to add element to the end of an array
//.indexOf - the method to check the index number of array element. If no element exist it will return -1



/////////////////////////////////////////////////////

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

///////////////////////////////////////////////////////////
function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
};
/////////////////////////////////////////////////////////////////
function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * .75;
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
