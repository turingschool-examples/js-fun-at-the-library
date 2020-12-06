// var genreShelf = [];
// var book = '';
//
function shelfBook(bookTitle, genreShelf){
  if (genreShelf.length < 3) {
  genreShelf.unshift(bookTitle)
  console.log(genreShelf.length)
}

  //genreShelf.sort(bookTitle)



//   if (bookTitle.title === "Dune") {
//   genreShelf.push(bookTitle)
//   console.log(genreShelf)
// } else if (bookTitle.title === "Hyperion"){
//   genreShelf.push(bookTitle);
//   console.log(genreShelf);
// }




  // if (genreShelf.length === 0){
  //   genreShelf[0] = bookTitle.title;
  //   console.log(genreShelf)
  // }
}
////////////////////////////////////////////////////////////////////

function unshelfBook(bookTitle, genreShelf){
  // console.log(dune.title)
  // console.log(bookTitle.title)
  // console.log(genreShelf.indexOf(bookTitle.title))
  if (bookTitle === "Dune") {
    genreShelf.splice(1,1)
  }
}
//////////////////////////////////////////////////////////////////

function listTitles(shelf){
  var bookArray = [];
///^ create an empty array to store book names
  for (var i = 0 ; i < shelf.length; i++){
    var bookName = shelf[i].title
    bookArray.push(bookName)
//^^^push the string into the bookArray for storage
    var myString = bookArray.join(', ')
// create new variable to change array into string with .join.  (what ever is inside of the parens
// will be added between each element of bookArray).
}





  // console.log(myString)
  return myString

  // var bookName = shelf[0].title
  // var bookName2 = shelf[1].title
  // var bookName3 = shelf[2].title
  // return (`${bookName}, ${bookName2}, ${bookName3}`)



}
////////////////////////////////////////////////////////////////////////
// var bookShelf = listTitles(bookShelf)

function searchShelf(bookShelf, book){
  listTitles(bookShelf);
  var booksOnShelf = listTitles(bookShelf).split(', ')
//  var booksOnShelf2 = booksOnShelf.split(',')
  console.log(booksOnShelf.length)
  //console.log(booksOnShelf2)
  for (var i = 0; i < booksOnShelf.length; i++){
    if (booksOnShelf[i] === book) {
      console.log(booksOnShelf[i])
      var bookCheck = true

      console.log(bookCheck)
    } else {
      var bookCheck = false

      console.log(bookCheck)
    }
  }
  return bookCheck
  //var test = listTitles(bookShelf);
  // console.log(bookShelf)
  ///// we need the value of bookshelf inside listTitles()
  // listTitles(shelf)
  // console.log(shelf)

  // console.log("test")
  // var search = listTitles(bookShelf)
  //   console.log(search)

  // var search = listTitles(bookShelf)
  // console.log(search)

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
