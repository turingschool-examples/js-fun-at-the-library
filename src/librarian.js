class Librarian {
  constructor(librarianName) {
    this.name = librarianName
  }

    greetPatron(patronName, isMorning) {
        if (isMorning === true) {
          return `Good morning, ${patronName}!`
        } else {
        return `Hello, ${patronName}!`
        }
    }

    createLibrary(libraryName) {
      this.library = libraryName
    }

    calculateLateFee(numberDaysLate) {
      return Math.ceil(numberDaysLate*(0.25))
    }

}


module.exports = Librarian;
