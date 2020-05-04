var addTitle = require("../src/catalog.js").addTitle;
var shelfBook = require("../src/shelves.js").shelfBook;
var unshelfBook = require("../src/shelves.js").unshelfBook;
var findBookRequest = require("../src/librarian.js").findBookRequest;

class Library {
  constructor(name) {
    this.name = name;
    this.catalog = [];
    this.shelves = {
      fantasy: [],
      fiction: [],
      nonFiction: []
    };
  }

  addBook(book) {
    addTitle(book.title, this.catalog);
    shelfBook(book, this.shelves[book.genre]);
  }

  checkoutBook(bookName, genre) {
    unshelfBook(bookName, this.shelves[genre]);
    return findBookRequest(bookName, this.catalog);
  }
}

module.exports = Library;