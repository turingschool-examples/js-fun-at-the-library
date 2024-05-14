
function shelfBook(subject, type) {
  if(type.length < 3)
  return type.unshift(subject);
// instead of using .push() 'adding it to the last place'
// use .unshift
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
    //to take the last comma out at the end of the string
    if(i < name.length - 1) {
      bookTitles += ', ';
    }
  }
  return bookTitles;
}

// function searchShelf(shelf, title) {
//   // how can we check the shelf for a title
//   // and match it with whats in there
//   for(var titleName of shelf) {
//     if(titleName.title === title) {
//       return true
//     }
//     // return false
//   }
//   return false
// }

function searchShelf(shelf, title) {
  for(var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      return true
    }
    // return false
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};