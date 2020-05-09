function createLibrary(name) {
  var library = {}; 
  library = {
    name: name, 
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
  //console.log(library.shelves)
  return library
}

function addBook(library, book) {
  var bookGenre = book.genre;
  library.shelves[`${bookGenre}`].push(book);
   // console.log("a1:", book.genre, "a2:", typeof(book.Genre), 'a3:', library.shelves[`${bookGenre}`])
    // console.log("A", library.shelves);
   //return "z", library
}

function checkoutBook(library, title) {
  var shelfGenres = [
    library.shelves.fantasy,
    library.shelves.nonFiction, 
    library.shelves.fiction,
  ];
      //console.log("1:", shelfGenres[2])
  var index;
  for (var i = 0; i < shelfGenres.length; i++) {
        //console.log("2:", shelfGenres[i]);   
    index = shelfGenres[i].findIndex(function(book) {
      return book.title === title
    })
        console.log(index);
    index !== -1 ? shelfGenres[i].splice(index, 1) : shelfGenres[i];
  }
    console.log(shelfGenres);
    return index !== -1 ? 
    `You have now checked out ${title} from the ${library.name}` : `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}



//console.log("3:", shelfGenres[i])
 //return "You have now checked out `${title}` from the `${library.name}`"
        //console.log("B:", library.shelves)
////  UNSHELFBOOK function FROM SHELF.js (b/c seemed so similar)

// function unshelfBook(title, shelf) {
//   shelf.splice(shelf.findIndex(function(book) {
//     return book.title === title
//   }), 1);
// }

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook,
};

// //  #3
// //  npm test test/library-test.js

////// ADDBOOK
  //var genre = book.genre;
  //libraryName[0].shelves.genre.push(book)
  //var shelfGenres = library.shelves;
  // for (var i = 0; i < library.shelves.length; i++) {
  //   shelfGenres = library.shelves;
  //     console.log("B:", shelfGenres);
  //   shelfGenre = shelfGenres[i];
  //     console.log("C:", shelfGenre);
  //   book.genre = shelfGenre ? shelfGenre.push(book) : shelfGenre;
  //     console.log("D:", shelfGenre);
  //}
////// CHECKOUTBOOK
  //bookGenre = book.genre;
  //console.log("A:", library.shelves.fiction[0].title)
  //library.shelves[`${bookGenre}`].includes(book) ? 
  //shelfGenre.splice(shelfGenre.findIndex(function(book) {
    //console.log("1", typeof(book), "2", library.shelves[`${book}`])
    // var shelf = library.shelves.includes(book) ? true:false;
    // console.log("3", shelf);
    // return shelf
  //library.shelves[`${bookGenre}`].splice(library.shelves[`${bookGenre}`].findIndex(function(book) {
    //return book.title === title
  //}), 1);
  //var shelfGenre = shelfGenres[1]
  //var bookTitle = book.title
   //var shelfGenre = shelfGenres[i];
   // shelfGenres[i].findIndex(function(book) {
      //     console.log("title's index", book.title === title)
      //   return book.title === title
      // }
      //shelfGenres[i].includes(title)
      //shelfGenres[i].splice(
    //shelfGenres[i].splice(shelfGenres[i].findIndex(function(book) {
      //return book.title === title 
       // 
        //checkout ? "A" : "B";
        //console.log("3", shelfGenres[i]);
         
        //return `Sorry, there are currently no copies of ${title} available at the ${library}`
  
   //return "You have now checked out " +`${title}`+" from the "  +`${library.name}` 