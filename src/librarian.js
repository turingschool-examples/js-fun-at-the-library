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
    this.findBook = function(book) {

    }
  }
}


 module.exports = Librarian;
