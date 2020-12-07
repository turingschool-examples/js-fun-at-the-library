class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name, isMorning){
    var statement;
    if (isMorning === true) {
      statement = `Good morning, ${name}!`
    } else {
      statement = `Hello, ${name}!`
    }
    return statement
  };
  findBook(bookTitle){
    var book = this.library.shelves['fantasy'][0]['title'];
    var statement;
    if (bookTitle === book) {
      statement = `Yes, we have ${bookTitle}`
      this.library.shelves['fantasy'].pop()
    } else {
      statement = `Sorry, we do not have ${bookTitle}`
    }
    return statement
  };
  calculateLateFee(daysLate) {
    var lateFee = daysLate * .25;
    return Math.ceil(lateFee);
  };
}
module.exports = Librarian;
