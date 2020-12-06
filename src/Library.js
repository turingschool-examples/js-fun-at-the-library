function createLibrary(name) {
  var building = {
    name: `${name}`,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return building;
}
function addBook(theLibrary, book) {
  createLibrary(theLibrary);
  // console.log(theLibrary.shelves.fantasy.push(book))

  // var placeBook = theLibrary.shelves.fantasy.push(book);
  // return placeBook;
    if (book.genre === "fantasy"){
      var placeBook = theLibrary.shelves.fantasy.unshift(book);
    } else if (book.genre === "nonFiction") {
      var placebook = theLibrary.shelves.nonFiction.unshift(book);
    } else {
      var placeBook = theLibrary.shelves.fiction.unshift(book);
    }
  return placeBook
  // for (var i = 0; i < 3; i++) {
  //   if (book.genre === "fantasy"){
  //     var placeBook = theLibrary.shelves.fantasy.push(book);
  //   } else if (book.genre === "nonFiction") {
  //     var placebook = theLibrary.shelves.nonFiction.push(book);
  //   } else {
  //     var placeBook = theLibrary.shelves.fantasy.push(book);
  //   }
  // }
  // return placeBook
}

function checkoutBook(theLibrary, book, genre) {
  // console.log(Object.keys(theLibrary.shelves).length)
  var shelf = Object.keys(theLibrary.shelves)
  /// object.keys is turning the object into its own unique array

  console.log(theLibrary.shelves[genre].length)
  // var  bookTaken = Object.keys(theLibrary.shelves.title)
  // var  bookDoubleTaken = Object.keys(bookTaken)
  //console.log(shelf)
  // console.log(theLibrary.shelves[genre][0].title)

  //console.log(bookDoubleTaken)
  //console.log(theLibrary.shelves.fiction[0].title)

    // for (var i = 0; i < shelf.length; i++){

    //var booked = theLibrary.shelves[genre][i].title
    if (theLibrary.shelves[genre].length === 0) {
      var statement = `Sorry, there are currently no copies of ${book} available at the ${theLibrary.name}`
    } else if(theLibrary.shelves[genre][0].title === book) {
      var statement = `You have now checked out ${book} from the ${theLibrary.name}`
      theLibrary.shelves[genre].pop()

      //console.log(theLibrary.shelves)
    } else {
      //console.log(theLibrary.shelves.fiction)
      var statement = `Sorry, there are currently no copies of ${book} available at the ${theLibrary.name}`
    }
    return statement

  // console.log(theLibrary.shelves.fiction)
  // delete Object.theLibrary.shelves.fiction.element
  // console.log(theLibrary.shelves.fiction)
  // ****if (theLibrary.shelves.fiction[0].title === book) {
  //   theLibrary.shelves.fiction.pop()
  //   console.log("congrats")
  // }
  //****** return `You have now checked out ${book} from the ${theLibrary.name}`

  // var shelf = Object.keys(theLibrary.shelves)
  // var removeBook = Object.keys(the)
  // for ( var i = 0; i < 5; i++) {
  //   if (genre === shelf[i]) {
  //     delete object.theLibrary.shelves.fiction.element
  //   }
  // }



  // console.log(shelf[2])
  // shelf.join(', ')
  // console.log(typeof shelf)
  // console.log(theLibrary.shelves.length)
  // if (genre === theLibrary.shelves){
  //   console.log(worked)
  // }


  // createLibrary(theLibrary);
  // var deleteBook = delete theLibrary.shelves.fantasy[1]
  // book = deleteBook;
  // console.log(theLibrary.shelves)

}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
