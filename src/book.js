function createTitle(title) {
  //return `The ${title}`;
  return 'The ' + title;
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

function calculatePageCount(title) {

      console.log("A", title.length, "B", 340/20, "C", title.length*20);

  return title.length*20;
}
  //title.length
  //find ammount of letters in title
  //for every letter, add 20 pages to total
  //declare a variable, assign it to the total number of pages
  //var pageCount = title.length*20;
      //console.log("D", pageCount)
  //return pageCount 
  //var book;

function writeBook(title, mainCharacter, genre) {
  book = {
    title, 
    mainCharacter,
    genre,
  }
      console.log("D", book.pageCount = calculatePageCount(title));

  book.pageCount = calculatePageCount(title);
  return book;
}

    //console.log("E", book);

function editBook() {
  
      console.log("F", book, "G", book.pageCount);
  
  return book.pageCount = book.pageCount*.75;
}




module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook,
}



// //  #1

// //  npm test test/book-test.js