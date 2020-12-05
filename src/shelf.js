
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  } else {
    return shelf;
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var titles = "";
  for (var i = 0; i < shelf.length; i++) {
    if (i !== 2) {
      titles += `${shelf[i].title}, `;
    } else {
      titles += `${shelf[i].title}`;
    }
  }
  return titles;
}


function searchShelf(shelfOn, titleNeeded) {
  console.log(shelfOn);
  console.log(titleNeeded);
  if (titleNeeded === shelfOn[0].title) {
    return true;
  } else if (titleNeeded === shelfOn[1].title) {
    return true;
  } else {
    return false;
  }
}





module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};
