

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }
  greetPatron(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  findBook(title){
    for (let key in this.library.shelves) {
      for (let i = 0; i < this.library.shelves[key].length; i++) {
        if (this.library.shelves[key][i].title == title) {
          this.library.shelves[key].splice(i, 1)
          return `Yes, we have ${title}`
        }
      }
    }
    return `Sorry, we do not have ${title}`
  }
  calculateLateFee(days){
    return Math.ceil(0.25*days)
  }
}
 
module.exports = Librarian;