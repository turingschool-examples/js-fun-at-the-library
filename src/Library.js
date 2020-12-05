
function createLibrary(newLibrary) {
  // var fantasy = [];
  // var fiction = [];
  // var nonFiction = [];
  var libraryData = {
    name: newLibrary,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return libraryData;
}


function addBook(libraryName, bookToAdd) {
  if ("fantasy" === bookToAdd.genre) {
    libraryName.shelves.fantasy.push(bookToAdd);
  } else if ("fiction" === bookToAdd.genre) {
    libraryName.shelves.fiction.push(bookToAdd);
  } else {
    libraryName.shelves.nonFiction.push(bookToAdd);
  }
}


function checkoutBook(libraryName, toTakeOut, genre) {
  if (genre === "fantasy") {
    for (var i = 0; i < libraryName.shelves.fantasy.length; i++) {
      if (libraryName.shelves.fantasy[i].title === toTakeOut) {
        libraryName.shelves.fantasy.splice(i, 1);
        return `You have now checked out ${toTakeOut} from the ${libraryName.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
  } else if (genre === "fiction") {
    for (var i = 0; i < libraryName.shelves.fiction.length; i++) {
      if (libraryName.shelves.fiction[i].title === toTakeOut) {
        libraryName.shelves.fiction.splice(i, 1);
        return `You have now checked out ${toTakeOut} from the ${libraryName.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
  } else if (genre === "nonFiction") {
    for (var i = 0; i < libraryName.shelves.nonFiction.length; i++) {
      if (libraryName.shelves.nonFiction[i].title === toTakeOut) {
        libraryName.shelves.nonFiction.splice(i, 1);
        return `You have now checked out ${toTakeOut} from the ${libraryName.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
  } else {
    return `Sorry, there are currently no copies of ${toTakeOut} available at the ${libraryName.name}`;
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
