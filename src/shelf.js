function shelfBook(bookName, shelfType){
  if(shelfType.length < 3)
  shelfType.unshift(bookName)
}

function unshelfBook(bookName, shelfType){
  for(i = 0; i < shelfType.length; i++){
    if(bookName === shelfType[i].title){
      shelfType.splice(i, 1)
    }
  }
}

function listTitles(shelfType){
  var titles = []
  for(i = 0; i < shelfType.length; i++){
    titles.push(shelfType[i].title)
  }
  return (titles.join(", "))
}

function searchShelf(shelfType, bookName){
  for(i = 0; i < shelfType.length; i++){
  if(shelfType[i].title === bookName){
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