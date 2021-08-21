
// This function should add books to a specific shelf.

// function shelfBook(book, shelf) {
//      if (shelf.length < 3) {
//       shelf.unshift(book);
//      };
// };

shelfBook = (book, shelf) => { (shelf.length < 3) ? shelf.unshift(book) : shelf }

//Function that remove a book from the array shelf.
// function unshelfBook(bookName, shelf) {
//       for (var i = 0; i < shelf.length; i++) {
//         if (shelf[i].title === bookName) {
//           shelf.splice(i, 1);
//         };
//       };
// };

unshelfBook = (bookName, shelf) => shelf.forEach((element, index) => { (bookName === element.title) ? shelf.splice(index, 1) : shelf });

//Function that lists a string with the titles of the books.
// function listTitles(listOfBooks) {
//    var listOfTitles = [];
//     for (i = 0; i < listOfBooks.length; i++){
//       var bookTitle = listOfBooks[i].title;
//           listOfTitles.push(bookTitle);
//       //listOfTitles += bookTitle + ", "; 
//     };
//     var result = listOfTitles.join(", ")
//   //   listOfTitles = listOfTitles.slice(0, listOfTitles.length - 2);
//   //    var listOfTitles = listOfBooks.title.join();
//   //  return listOfTitles;
//   return result;
// };

listTitles = (shelf) => {
  let titles = [];
  shelf.forEach(element => {titles.push(element.title)});
  return titles.join(', ');
};

// Function that search on the shelf if title exists.
// function searchShelf(shelf, bookTitle) {
//       var isOnShelf = false;
//       for (var i = 0; i < shelf.length; i++) {
//        if (shelf[i].title === bookTitle) {
//           return isOnShelf = true;
//       };
//     };
//       return isOnShelf ;
// };

searchShelf = (shelf, bookName) => {
  let isOnShelf = null;
  shelf.forEach(element => { (bookName === element.title) ? isOnShelf = true : isOnShelf = false });
  return isOnShelf;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};