
// This function should add books to a specific shelf.

function shelfBook(book, shelf) {
     if (shelf.length < 3) {
      shelf.unshift(book);
     }
};
//Function that remove a book from the array shelf.
function unshelfBook(bookName, shelf) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].title === bookName) {
          shelf.splice(i, 1);
        }
      }
};

//Function that lists a string with the titles of the books.
function listTitles(listOfBooks) {
  var listOfTitles = "";
    for (i = 0; i < listOfBooks.length; i++){
      var bookTitle = listOfBooks[i].title;
      listOfTitles += bookTitle + ", "; 
    }
    listOfTitles = listOfTitles.slice(0, listOfTitles.length - 2)
    return listOfTitles;
};

// Function that search on the shelf if title exists staring at the end of the shelf array.
function searchShelf(shelf, bookTitle) {
      var isOnShelf = false;
      for (var i = 0; i < shelf.length; i++) {
       if (shelf[i].title === bookTitle) {
          return isOnShelf = true;
      // } else if (shelf[i].title === bookTitle){
      //   isOnShelf = true;
      };
    };
      return isOnShelf ;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};