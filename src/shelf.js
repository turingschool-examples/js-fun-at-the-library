
function shelfBook(subject, type) {
  if(type.length < 3)
  return type.unshift(subject);
}

function unshelfBook(title, shelf) {
  for(var i = 0; i < shelf.length; i++) {
    if(title === shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(name) {
  var bookTitles = '';
  for(var i = 0; i < name.length; i++) {
    bookTitles += name[i].title;
    if(i < name.length - 1) {
      bookTitles += ', ';
    }
  }
  return bookTitles;
}

function searchShelf(shelf, title) {
  for(var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
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