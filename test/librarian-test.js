var assert = require("chai").assert;
var Librarian = require('../src/Librarian.js');

var {
  createLibrary, addBook
} = require('../src/library.js')

describe('Librarian (class)', function() {
  it.skip('should instantiate a librarian object', function() {
    var casey = new Librarian("Casey");

    assert.instanceOf(casey, Librarian);
  });

  it.skip('should have a name', function() {
    var librarian = new Librarian("Casey");

    assert.equal(librarian.name, "Casey");
  });

  it.skip('should be able to have a different name', function() {
    var librarian = new Librarian("Scott");

    assert.equal(librarian.name, "Scott");
  });

  it.skip('should work at a library', function() {
    var library = createLibrary("Denver Public Library");
    var librarian = new Librarian("Scott", library);

    assert.equal(librarian.name, "Scott");
    assert.deepEqual(librarian.library, library);
  });

  it.skip('should be able to work at a different library', function() {
    var library = createLibrary("Aurora Public Library");
    var librarian = new Librarian("Casey", library);

    assert.deepEqual(librarian.library, library);
  });

  it.skip('should be able to greet a library patron by name', function() {
    var scott = new Librarian("Scott");

    assert.equal(scott.greetPatron("Will"), "Hello, Will!");
    assert.equal(scott.greetPatron("Tilly"), "Hello, Tilly!");
  });

  it.skip('should greet a library patron differently if it is morning', function() {
    var leta = new Librarian("Leta");

    assert.equal(leta.greetPatron("Scott"), "Hello, Scott!");
    assert.equal(leta.greetPatron("Amy", true), "Good morning, Amy!");
    assert.equal(leta.greetPatron("Casey", false), "Hello, Casey!");
  });

  it.skip('should confirm if a requested book is on the shelves', function() {
    var auroraLibrary = createLibrary("Aurora Public Library");
    var librarian = new Librarian("Casey", auroraLibrary);
    var book = {title: 'The Fifth Season', genre: 'fantasy'}

    addBook(librarian.library, book);

    var bookConfirmation = librarian.findBook("The Fifth Season");

    assert.equal(bookConfirmation, "Yes, we have The Fifth Season");
  });

  it.skip('should say if requested book is not found', function() {
    var library = createLibrary("Aurora Public Library");
    var librarian = new Librarian("Casey", library);
    var book = { title: 'The Fifth Season', genre: 'fantasy' }

    addBook(librarian.library, book);

    var bookConfirmation = librarian.findBook("Five Brief Lessons in Physics");

    assert.equal(bookConfirmation, "Sorry, we do not have Five Brief Lessons in Physics");
  });

  it.skip('should checkout the book if found', function() {
    var library = createLibrary("Aurora Public Library");
    var librarian = new Librarian("Casey", library);
    var book = { title: 'The Fifth Season', genre: 'fantasy' }

    addBook(librarian.library, book);

    assert.deepEqual(librarian.library.shelves.fantasy, []);
  });

  it.skip('calculateLateFee should charge the customer a fee of 0.25 per day the book is late, rounded up to the closest whole number (integer)', function() {
    var library = createLibrary("Aurora Public Library");
    var librarian = new Librarian("Casey", library);
    var threeDaysLate = librarian.calculateLateFee(3);
    var sevenDaysLate = librarian.calculateLateFee(9);

    assert.equal(threeDaysLate, 1);
    assert.equal(sevenDaysLate, 3);
  });
});