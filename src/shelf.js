const { editBook } = require("./book");

function shelfBook(book, array){
  if(book.genre === 'sciFi' && array.length < 3){
    array.unshift(book)
  }
}

function unshelfBook(bookToRemove, shelf){
  for(var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === bookToRemove){
      shelf.splice(i,1)
    }
  }  
}

function listTitles(bookList){
  var titles = []
  for(var i =0; i < bookList.length; i++){
    titles.push(bookList[i].title)
  }
  return titles.join(', ')
}

function searchShelf(shelf, bookTitle){
  for(var i =0; i < shelf.length; i++){ 
  if(shelf[i].title === bookTitle){
    return true
  } 
}
 return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};