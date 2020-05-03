var assert = require("chai").assert;
var addTitle = require("../src/catalog.js").addTitle;
var removeTitle = require("../src/catalog.js").removeTitle;
var addManyTitles = require("../src/catalog.js").addManyTitles;
var alphabetizeTitles = require("../src/catalog.js").alphabetizeTitles;

describe("catalog.js", function() {

  it('addTitle should be a function', function() {
    assert.isFunction(addTitle);
  })

  it('addTitle should be able to add a book to the catalog', function() {
    var fantasyCatalog = [];

    addTitle("Mistborn", fantasyCatalog);

    assert.equal(fantasyCatalog.length, 1);
    assert.equal(fantasyCatalog[0], "Mistborn");
  })

  it('addTitle should be able to add another book to the catalog', function() {
    var fantasyCatalog = [];

    addTitle("Matilda", fantasyCatalog);
    addTitle("Coraline", fantasyCatalog);
    addTitle("Earthsea", fantasyCatalog);

    assert.equal(fantasyCatalog[0], "Matilda");
    assert.equal(fantasyCatalog[1], "Coraline");
    assert.equal(fantasyCatalog[2], "Earthsea");
    assert.equal(fantasyCatalog.length, 3);
  })

  it('removeTitle should be a function', function() {
    assert.isFunction(removeTitle);
  })

  it('removeTitle should be able to remove a book from the catalog', function() {
    var fantasyCatalog = [];  

    addTitle("Matilda", fantasyCatalog);
    addTitle("Coraline", fantasyCatalog);
    removeTitle("Matilda", fantasyCatalog);

    assert.equal(fantasyCatalog.length, 1);
    assert.notInclude(fantasyCatalog, "Matilda");
  })

  it('addManyTitles should be a function', function() {
    assert.isFunction(addManyTitles);
  })

  it('addManyTitles should be able to add lots of books to the catalog', function() {
    var fantasyCatalog = [];    
    var fantasyBooks = ["Dracula", "Seraphina", "Neverwhere"];

    addTitle("Matilda", fantasyCatalog);
    addManyTitles(fantasyBooks, fantasyCatalog);

    assert.equal(fantasyCatalog[0], "Matilda");
    assert.equal(fantasyCatalog[1], "Dracula");
    assert.equal(fantasyCatalog[2], "Seraphina");
    assert.equal(fantasyCatalog[3], "Neverwhere");
  })

  it('addManyTitles should be able to add more books to the catalog', function() {
    var fantasyCatalog = [];    
    var fantasyBooks = ["5th Season", "The Hobbit"];

    addManyTitles(fantasyBooks, fantasyCatalog);

    assert.equal(fantasyCatalog[0], "5th Season");
    assert.equal(fantasyCatalog[1], "The Hobbit");
  })

  it("alphabetizeTitles should be a function", function() {
    assert.isFunction(alphabetizeTitles);
  })

  it("alphabetizeTitles should categorize books alphabetically", function () {
    var fantasyCatalog = [];

    addManyTitles(["Dracula", "Seraphina", "Coraline", "Earthsea"], fantasyCatalog);
    alphabetizeTitles(fantasyCatalog);
    
    assert.equal(fantasyCatalog[0], "Coraline");
    assert.equal(fantasyCatalog[1], "Dracula");
    assert.equal(fantasyCatalog[2], "Earthsea");
    assert.equal(fantasyCatalog[3], "Seraphina");
  })
})