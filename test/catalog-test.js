var assert = require("chai").assert;
var addBook = require("../src/catalog.js").addBook;
var removeBook = require("../src/catalog.js").removeBook;
var addManyBooks = require("../src/catalog.js").addManyBooks;
var alphabetizeBooks = require("../src/catalog.js").alphabetizeBooks;

describe("shelves.js", function() {

  it('addBook should be a function', function() {
    assert.isFunction(addBook);
  })

  it('addBook should be able to add a book to the catalog', function() {
    var fantasyCatalog = [];
    
    addBook("Mistborn", fantasyCatalog);

    assert.equal(fantasyCatalog.length, 1);
    assert.equal(fantasyCatalog[0], "Mistborn");
  })

  it('addBook should be able to add another book to the catalog', function() {
    var fantasyCatalog = [];

    addBook("Matilda", fantasyCatalog);
    addBook("Coraline", fantasyCatalog);
    addBook("Earthsea", fantasyCatalog);

    assert.equal(fantasyCatalog[0], "Matilda");
    assert.equal(fantasyCatalog[1], "Coraline");
    assert.equal(fantasyCatalog[2], "Earthsea");
    assert.equal(fantasyCatalog.length, 3);
  })

  it('removeBook should be a function', function() {
    assert.isFunction(removeBook);
  })

  it('removeBook should be able to remove a book from the catalog', function() {
    var fantasyCatalog = [];  

    addBook("Matilda", fantasyCatalog);
    addBook("Coraline", fantasyCatalog);
    removeBook("Matilda", fantasyCatalog);

    assert.equal(fantasyCatalog.length, 1);
    assert.notInclude(fantasyCatalog, "Matilda");
  })

  it('addManyBooks should be a function', function() {
    assert.isFunction(addManyBooks);
  })

  it('addManyBooks should be able to add lots of books to the catalog', function() {
    var fantasyCatalog = [];    
    var fantasyBooks = ["Dracula", "Seraphina", "Neverwhere"];

    addBook("Matilda", fantasyCatalog);
    addManyBooks(fantasyBooks, fantasyCatalog);

    assert.equal(fantasyCatalog[0], "Matilda");
    assert.equal(fantasyCatalog[1], "Dracula");
    assert.equal(fantasyCatalog[2], "Seraphina");
    assert.equal(fantasyCatalog[3], "Neverwhere");
  })

  it('addManyBooks should be able to add more books to the catalog', function() {
    var fantasyCatalog = [];    
    var fantasyBooks = ["5th Season", "The Hobbit"];

    addManyBooks(fantasyBooks, fantasyCatalog);

    assert.equal(fantasyCatalog[0], "5th Season");
    assert.equal(fantasyCatalog[1], "The Hobbit");
  })

  it("alphabetizeBooks should be a function", function() {
    assert.isFunction(alphabetizeBooks);
  })

  it("alphabetizeBooks should categorize books alphabetically", function () {
    var fantasyCatalog = [];

    addManyBooks(["Dracula", "Seraphina", "Coraline", "Earthsea"], fantasyCatalog);
    alphabetizeBooks(fantasyCatalog);
    
    assert.equal(fantasyCatalog[0], "Coraline");
    assert.equal(fantasyCatalog[1], "Dracula");
    assert.equal(fantasyCatalog[2], "Earthsea");
    assert.equal(fantasyCatalog[3], "Seraphina");
  })
})