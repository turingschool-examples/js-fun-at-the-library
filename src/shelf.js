function shelfBook(book, shelf) {
  return shelf.length < 3 ? shelf.unshift(book) : book;
  
  //add books to the shelf matching it's genre 
}

function unshelfBook(title, shelf) {
  shelf.splice(shelf.findIndex(function(book) {
    return book.title === title
  }), 1);
}
//shelf.splice(shelf.findIndex(book => book.title === title), 1);
// shelf.findIndex(function(book) {
//   return book.title === title;
// })
// findIndex((book) => {return book.title === title})
//fruits.findIndex(fruit => fruit === "blueberries")

//function listTitles(shelf) {
function listTitles(shelf) {
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
}
  //console.log("A", shelf[0].title + shelf[1].title);
  //shelf[0].title + shelf[1].title
  //for (var i =  )
  //titles = "fanstasyShelf[0].title" + "fanstasyShelf[1].title" + "fanstasyShelf[2].title";
  //console.log(listTitles(shelf))


// function searchShelf(shelf, {book}) {
//   //var shelfTitles = shelf[book]
//   console.log(shelf, book)
//   shelf.includes(title) ? true:false;
//   console.log("A", shelf, "B", book, "C", title)
// }

function searchShelf(shelf, book) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return true;
    }
  } return false;
}
//     return shelf[i].title === book ? true:false
//   }
// }

  module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};


// //  #2

// //  test test/shelf-test.js