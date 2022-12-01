function shelfBook(bookName, shelfType){
  if(shelfType.length < 3)
  shelfType.unshift(bookName)
}




module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};