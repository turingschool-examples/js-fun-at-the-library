//searchShelf
  // - should tell us if a title is on the shelf
  // - should tell us if a title is on a different shelf

  function shelfBook(book, shelf){
    if (shelf.length < 3) {
      shelf.unshift(book);
      }
};

function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    }
  }
};

// function listTitles(shelf) {
//   var titleList = "";
//   for (i = 0; i < shelf.length; i++) {
//     if (i < shelf.length - 1){
//     titleList += shelf[i].title + ", ";
//   }else {
//     titleList += shelf[i].title
//   }
//   }
//     return titleList;
// };
function listTitles(shelf) {
  var newArray = [];
  for (i = 0; i < shelf.length; i++) {
    newArray.push(shelf[i].title)
  }
  return newArray.join(", ")
}




function searchShelf(shelf, title) {
  var onShelf = false;
for (i = 0; i < shelf.length; i++) {
  if (shelf[i].title === title) {
    onShelf = true;
}
}
return onShelf
};



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
