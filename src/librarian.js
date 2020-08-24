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

  findBook() {
    
  }
}

module.exports = Librarian;
