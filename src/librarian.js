class Librarian {
  constructor(librarianName, libraryName) {
    this.name = librarianName,
    this.library = libraryName
    }

  greetPatron(patronName, isMorning) {
        if (isMorning === true) {
          return `Good morning, ${patronName}!`
        } else {
        return `Hello, ${patronName}!`
        }
    }

  calculateLateFee(numberDaysLate) {
      return Math.ceil(numberDaysLate*(0.25))
    }
}

module.exports = Librarian;
