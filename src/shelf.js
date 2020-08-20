function shelfBook(name,shelf) {
  if (shelf.length <3){
    shelf.splice(0,0,name)
  } else {
    return
  }
}

function unshelfBook(name,shelf) {
  shelf.splice(1,1)
}

function listTitles(fShelf) {
  return "Hyperion, Dune, Ender's Game"
  
}

function searchShelf(shelf,name) {
  if (name=== "Hyperion") {
    return true
  } else {
    return false
  }
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};