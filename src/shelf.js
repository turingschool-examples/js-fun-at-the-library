function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(book)
}
}
function unshelfBook(bookname, shelf) {
  for (let i=0; i < shelf.length; i++) {
    if (bookname == shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
}
function listTitles(shelf) {
  titles = ''
  for (let i=0; i < shelf.length; i++) {
      titles = titles + shelf[i].title + ', '
    }
  titles = titles.slice(0, -2)
  return titles
}
function searchShelf(shelf, title) {
  titles = listTitles(shelf)
  if (titles.includes(title)) {
    return true
  }
  else {
    return false
  }


}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};