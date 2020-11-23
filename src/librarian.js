var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, location) {
    this.name = name;
    this.library = location;
  }

  greetPatron(patron, morning) {
    if (true === morning) {
      return `Good morning, ${patron}!`
    } else {
        return `Hello, ${patron}!`;
    }
  };

  findBook(bookName) {
    for (var keys in this.library.shelves) {
      for (var i = 0; i < this.library.shelves[keys].length; i++) {
        if (bookName === this.library.shelves[keys][i].title) {
          this.library.shelves[keys].splice(i, 1);
          return `Yes, we have ${bookName}`;
        }
      }
    }
    return `Sorry, we do not have ${bookName}`
  };

  calculateLateFee(daysLate) {
    var fee = daysLate * 0.25;
    return Math.ceil(fee);
  }
}

module.exports = Librarian;
