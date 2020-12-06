function shelfBook(book, shelf) {
  if (shelf.length >= 3) {
    return null
  } else {
  shelf.unshift(book)
  }
}

function unshelfBook(bookTitle, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1)
    } else {
      ;
    }
  }
}

function listTitles(shelf) {
  var titleList = ''
  for (i = 0; i < shelf.length; i++) {
    if (i === shelf.length-1) {
      titleList += shelf[i].title
    } else {
      titleList += (shelf[i].title+", ")
    }
  }
  return titleList
}

function searchShelf(shelf, bookTitle) {
  var onShelf = null
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      onShelf = true
    } else {
      onShelf = false
    }
  }
  return onShelf
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
