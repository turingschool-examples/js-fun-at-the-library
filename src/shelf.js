const shelfBook = (book, shelf) => { (shelf.length < 3) && shelf.unshift(book) }

const unshelfBook = (bookName, shelf) => shelf.forEach((element, index) => (
  (bookName === element.title) ? shelf.splice(index, 1) : shelf 
  ));

const listTitles = (shelf) => {
  let titles = [];
  shelf.forEach(element => {titles.push(element.title)});
  return titles.join(', ');
};

const searchShelf = (shelf, bookName) => {
  let isOnShelf = null;
  shelf.forEach(element => { (bookName === element.title) ? isOnShelf = true : isOnShelf = false });
  return isOnShelf;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};