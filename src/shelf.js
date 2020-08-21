function shelfBook(name,shelf) {
  if (shelf.length <3){
    shelf.unshift(name)
  }
}

function unshelfBook(name,shelf) {
  //shelf.splice(1,1)
  for (var i= 0; i<shelf.length ; i++){
    if (shelf[i].title===name) {
      shelf.splice(i,i);
    } 
  }
}

function listTitles(newShelf) {
  var list = ""
  for (var i=0; i<newShelf.length; i++){
    if (i<newShelf.length -1) {
    list +=  newShelf[i].title +", "
    } else {
      list +=  newShelf[i].title 
    }
  }  
  return list
}

function searchShelf(shelf,name) {
  var titles =""
  for (var i=0; i<shelf.length; i++){
    titles += shelf[i].title+ ","
  }
    return titles.includes(name)
}
  // if (name=== "Hyperion") {
  //   return true
  // } else {
  //   return false
  // }

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};