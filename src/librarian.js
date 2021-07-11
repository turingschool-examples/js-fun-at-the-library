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
    var isOnLibrary = false;
    for (var key in this.library.shelves) {
        for (var i = 0; i < this.library.shelves[key].length; i++) {
          if (bookToFind === this.library.shelves[key][i].title) {
            this.library.shelves[key].splice(i, 1);
            return `Yes, we have ${bookToFind}`; 
          };
        };
        return `Sorry, we do not have ${bookToFind}`;
    };
  };

  calculateLateFee(numberOfDaysLate) {
    var lateFee = numberOfDaysLate * 0.25;
    return Math.ceil(lateFee);
  }

  };

module.exports = Librarian;