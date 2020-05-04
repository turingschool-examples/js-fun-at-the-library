var assert = require("chai").assert;
var greetPatron = require('../src/librarian.js').greetPatron;
var findBookRequest = require('../src/librarian.js').findBookRequest;
var checkInBookReturn = require('../src/librarian.js').checkInBookReturn;
var calculateLateFee = require('../src/librarian.js').calculateLateFee;

describe('librarian.js', function() {
  it('greetPatron should be a function', function() {
    assert.isFunction(greetPatron);
  })

  it('greetPatron should greet a patron by name', function() {
    assert.equal(greetPatron("Will"), "Hello, Will!");
    assert.equal(greetPatron("Tilly"), "Hello, Tilly!");
  })

  it('greetPatron should greet a patron differently if it is morning', function() {
    assert.equal(greetPatron("Scott"), "Hello, Scott!");
    assert.equal(greetPatron("Leta", 11), "Good Morning, Leta!");
    assert.equal(greetPatron("Casey", 12), "Hello, Casey!");
  })

  it('findBookRequest should be a function', function() {
    assert.isFunction(findBookRequest);
  })

  it('findBookRequest should confirm if the requested book is in the catalog', function() {
    var fantasyCatalog = ["Fifth Season", "Dracula", "Seraphina", "Neverwhere", "Coraline"];

    var bookConfirmation = findBookRequest("Fifth Season", fantasyCatalog);

    assert.equal(bookConfirmation, "Yes, we have Fifth Season");
  })

  it('findBookRequest should acknowledge if the requested book is not in the catalog', function() {
    var fantasyCatalog = ["Fifth Season", "Dracula", "Seraphina", "Neverwhere", "Coraline"];

    var bookConfirmation = findBookRequest("Matilda", fantasyCatalog);

    assert.equal(bookConfirmation, "Sorry, we do not have Matilda");
  })

  it('findBookRequest should remove the title from the catalog if found', function() {
    var fantasyCatalog = ["Fifth Season", "Dracula", "Seraphina", "Neverwhere", "Coraline"];

    var bookConfirmation = findBookRequest("Fifth Season", fantasyCatalog);

    assert.equal(bookConfirmation, "Yes, we have Fifth Season");
    assert.notInclude(fantasyCatalog, "Fifth Season");
  })
  
  it('checkInBookReturn should be a function', function() {
    assert.isFunction(checkInBookReturn);
  })

  it('checkInBookReturn should add a title to the catalog upon a book return', function() {
    var fantasyCatalog = ["Fifth Season", "Seraphina", "Neverwhere", "Coraline"];

    assert.notInclude(fantasyCatalog, "Dracula");

    checkInBookReturn("Dracula", fantasyCatalog);

    assert.include(fantasyCatalog, "Dracula");
  })

  it('checkInBookReturn should not add the return if the book is already in the catalog', function() {
    var fantasyCatalog = ["Fifth Season", "Seraphina", "Neverwhere", "Coraline"];

    var returnConfirmation = checkInBookReturn("Seraphina", fantasyCatalog);

    assert.equal(fantasyCatalog.length, 4);
    assert.equal(returnConfirmation, undefined); //Too spicy?
  })

  it('checkInBookReturn should thank the patron for their return', function() {
    var fantasyCatalog = ["Fifth Season", "Seraphina", "Neverwhere", "Coraline"];

    var returnConfirmation = checkInBookReturn("Dracula", fantasyCatalog);

    assert.include(fantasyCatalog, "Dracula");
    assert.equal(returnConfirmation, "Thank you for returning Dracula");
  })

  it('calculateLateFee should be a function', function() {
    assert.isFunction(calculateLateFee);
  })

  //Too spicy?
  it('calculateLateFee should charge the customer a fee of 0.25 per day the book is late, rounded up to the closest integer', function() {
    var daysLate = 3;
    var lateFee = calculateLateFee(daysLate);

    assert.equal(lateFee, 1);
  })

  it('calculateLateFee should charge the customer a fee of 0.25 per day the book is late, rounded up to the closest integer', function() {
    var lateFee = calculateLateFee(9);

    assert.equal(lateFee, 3);
  })
})