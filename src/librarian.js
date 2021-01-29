// ---Commit out is Mod1 code.---

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patron, morning) {
    if (morning === true) {
      return `Good morning, ${patron}!`
    } else {
      return `Hello, ${patron}!`;
    }
  }
  findBook(bookLookingFor) {
    const bookToRemove = this.library.shelves.fantasy.findIndex((book) => {
      return book.title === bookLookingFor;
    })
    if (bookToRemove !== -1) {
      this.library.shelves.fantasy.splice(bookToRemove, 1);
      return `Yes, we have ${bookLookingFor}`;
    } else {
      return `Sorry, we do not have ${bookLookingFor}`;
    }
  }
  calculateLateFee(dayslate) {
    return Math.ceil(dayslate * .25);
  }
}

// class Librarian {
//   constructor(name, library) {
//     this.name = name;
//     this.library = library;
//     this.greetPatron = function(patron, morning) {
//       if (morning === true) {
//         return `Good morning, ${patron}!`
//       }
//         return `Hello, ${patron}!`;
//     }
//     this.findBook = function(bookTitle) {
//       for (var i = 0; i < library.shelves.fantasy.length; i++) {
//         if (library.shelves.fantasy[i].title === bookTitle) {
//           library.shelves.fantasy.splice(i, 1);
//           return `Yes, we have ${bookTitle}`;
//         }
//       }
//       for (var i = 0; i < library.shelves.fiction.length; i++) {
//         if (library.shelves.fiction[i].title === bookTitle) {
//           library.shelves.fiction.splice(i, 1);
//           return `Yes, we have ${bookTitle}`;
//         }
//       }
//       for (var i = 0; i < library.shelves.nonFiction.length; i++) {
//         if (library.shelves.nonFiction[i].title === bookTitle) {
//           library.shelves.nonFiction.splice(i, 1);
//           `Yes, we have ${bookTitle}`;
//         }
//       }
//       return `Sorry, we do not have ${bookTitle}`;
//     }
//   }
// }


module.exports = Librarian;
