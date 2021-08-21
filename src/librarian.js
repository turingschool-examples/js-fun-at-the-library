class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };
  

  greetPatron(patron, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patron}!`
    };
    return `Hello, ${patron}!`;
  };

  findBook(bookToFind) {
    let isOnLibrary = false;
    let confirmation = `Sorry, we do not have ${bookToFind}`;
    let bookObjects = Object.values(this.library.shelves);
    
    bookObjects.forEach((shelf) => shelf.find((book, index) => {
      if (bookToFind === book.title) {
        this.library.shelves[book.genre].splice(index, 1);
        confirmation = `Yes, we have ${bookToFind}`;
      };
    }));
      return confirmation
  };

  calculateLateFee(numberOfDaysLate) {
    let lateFee = numberOfDaysLate * 0.25;
    return Math.ceil(lateFee);
  };

  };

module.exports = Librarian;