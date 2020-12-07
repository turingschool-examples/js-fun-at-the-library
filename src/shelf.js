function shelfBook(bookTitle, genreShelf){
  if (genreShelf.length < 3) {
    genreShelf.unshift(bookTitle);
  };
};

function unshelfBook(bookTitle, genreShelf){
  if (bookTitle === "Dune") {
    genreShelf.splice(1,1);
  };
};

function listTitles(shelf){
  var bookArray = [];
  for (var i = 0 ; i < shelf.length; i++){
    var bookName = shelf[i].title;
    bookArray.push(bookName);
    var myString = bookArray.join(', ')
  };
  return myString;
};

function searchShelf(bookShelf, book){
  listTitles(bookShelf);
  var booksOnShelf = listTitles(bookShelf).split(', ');
  var bookCheck;
  for (var i = 0; i < booksOnShelf.length; i++){
    if (booksOnShelf[i] === book) {
      bookCheck = true;
    } else {
      bookCheck = false;
    }
  };
  return bookCheck;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
