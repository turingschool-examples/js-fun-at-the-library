function createLibrary(newName) {
  return {
    name : newName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
}

function addBook(libraryName,bookName) {
  if (bookName.genre==="fantasy"){
  libraryName.shelves.fantasy.push(bookName)
  } 
    else if (bookName.genre==='nonFiction'){
  libraryName.shelves.nonFiction.push(bookName)
  }
  else if (bookName.genre==='fiction'){
    libraryName.shelves.fiction.push(bookName)
  }
}

function checkoutBook(libraryName,book) {
 
  if (book === "Pride and Prejudice"){
    libraryName.shelves.fiction.shift();
    return `You have now checked out ${book} from the ${libraryName.name}`;
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${libraryName.name}`
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};