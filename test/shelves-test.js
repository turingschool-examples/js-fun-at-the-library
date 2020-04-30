var assert = require("chai").assert;
var addBook = require("../src/shelves.js").addBook;
var removeBook = require("../src/shelves.js").removeBook;
var addManyBooks = require("../src/shelves.js").addManyBooks;
var organizeShelf = require("../src/shelves.js").organizeShelf;


describe("shelves.js", function() {
  var fantasyShelf = [];

  it.skip('addBook should be a function', function() {
    assert.isFunction(addBook);
  })

  it.skip('addBook should be able to add a book to a shelf', function() {
    fantasyShelf = addBook("Mistborn", fantasyShelf);

    assert.equal(fantasyShelf.length, 1);
    assert.equal(fantasyShelf[0], "Mistborn");
  })

  it.skip('addBook should be able to add another book to a shelf', function() {
    fantasyShelf = addBook("Matilda", fantasyShelf);
    fantasyShelf = addBook("Coraline", fantasyShelf);
    fantasyShelf = addBook("Earthsea", fantasyShelf);

    assert.equal(fantasyShelf[1], "Matilda");
    assert.equal(fantasyShelf[2], "Coraline");
    assert.equal(fantasyShelf[3], "Earthsea");
    assert.equal(fantasyShelf.length, 4);
  })

  it.skip('removeBook should be a function', function() {
    assert.isFunction(removeBook);
  })

  it.skip('removeBook should be able to remove a book from the shelf', function() {
    fantasyShelf = removeBook("Matilda", fantasyShelf);

    assert.equal(fantasyShelf.length, 3);
    assert.notInclude(fantasyShelf, "Matilda");
  })

  it.skip('addManyBooks should be a function', function() {
    assert.isFunction(addManyBooks);
  })


  it.skip('addManyBooks should be able to add lots of books to our shelf', function() {
    var fantasyBooks = ["Dracula", "Seraphina", "Neverwhere"];

    fantasyShelf = addManyBooks(fantasyBooks, fantasyShelf);

    assert.equal(fantasyShelf[0], "Mistborn");
    assert.equal(fantasyShelf[1], "Coraline");
    assert.equal(fantasyShelf[2], "Earthsea");
    assert.equal(fantasyShelf[3], "Dracula");
    assert.equal(fantasyShelf[4], "Seraphina");
    assert.equal(fantasyShelf[5], "Neverwhere");
  })

  it.skip("organizeShelf should be a function", function() {
    assert.isFunction(organizeShelf);
  })

  it.skip("organizeShelf should shelve books according to their subject", function () {
    const fantasyShelf = ["Hobbit, The", "Abhorsen, The", "Coraline", "Earthsea"];
    var organizedShelf = organizeShelf(fantasyShelf);
    assert.equal(organizedShelf[0], "Abhorsen, The");
    assert.equal(organizedShelf[1], "Coraline");
    assert.equal(organizedShelf[2], "Earthsea");
    assert.equal(organizedShelf[3], "Hobbit, The");
  })

})