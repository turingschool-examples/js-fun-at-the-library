class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function(patron, morning) {
      if (morning === true) {
        return `Good morning, ${patron}!`
      }
        return `Hello, ${patron}!`;
    }
    this.findBook = function(bookTitle) {
      for (var i = 0; i < library.shelves.fantasy.length; i++) {
        if (library.shelves.fantasy[i].title === bookTitle) {
          library.shelves.fantasy.splice(i, 1);
          return `Yes, we have ${bookTitle}`;
        }
      }
      for (var i = 0; i < library.shelves.fiction.length; i++) {
        if (library.shelves.fiction[i].title === bookTitle) {
          library.shelves.fiction.splice(i, 1);
          return `Yes, we have ${bookTitle}`;
        }
      }
      for (var i = 0; i < library.shelves.nonFiction.length; i++) {
        if (library.shelves.nonFiction[i].title === bookTitle) {
          library.shelves.nonFiction.splice(i, 1);
          `Yes, we have ${bookTitle}`;
        }
      }
      return `Sorry, we do not have ${bookTitle}`;
    }
  }
}

 module.exports = Librarian;
