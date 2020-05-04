var assert = require("chai").assert;

// book.js imports
var createTitle = require("../src/book.js").createTitle;
var buildMainCharacter = require("../src/book.js").buildMainCharacter;
var writeBook = require("../src/book.js").writeBook;

var shelfBook = require("../src/shelves.js").shelfBook;
var unshelfBook = require("../src/shelves.js").unshelfBook;

describe("shelves.js", function() {
  it.skip("shelfBook should be a function", function() {
    assert.isFunction(shelfBook);
  })

  it.skip("shelfBook should add books to a shelf", function() {
    var hyperion = {
      title: "Hyperion",
      mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
      pageCount: 482
    };
    var dune = {
      title: "Dune",
      mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
      pageCount: 421
    };
    var scifiShelf = [];

    shelfBook(hyperion, scifiShelf);
    shelfBook(dune, scifiShelf);

    assert.equal(scifiShelf[0], dune);
    assert.equal(scifiShelf[1], hyperion);
  })

  it.skip('shelfBook should add another book to the shelf', function() {
    var hyperion = {
      title: "Hyperion",
      mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
      pageCount: 482
    };
    var dune = {
      title: "Dune",
      mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
      pageCount: 421
    };
    var endersgame = {
      title: "Ender's Game",
      mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
      pageCount: 324
    };
    var scifiShelf = [hyperion];

    shelfBook(endersgame, scifiShelf);
    shelfBook(dune, scifiShelf);

    assert.equal(scifiShelf[0], dune);
    assert.equal(scifiShelf[1], endersgame);
    assert.equal(scifiShelf[2], hyperion);
  })

  it.skip('unshelfBook should be a function', function() {
    assert.isFunction(unshelfBook);
  })

  it.skip('unshelfBook should remove a book by name', function() {
    var hyperion = {
      title: "Hyperion",
      mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
      pageCount: 482
    };
    var dune = {
      title: "Dune",
      mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
      pageCount: 421
    };
    var endersgame = {
      title: "Ender's Game",
      mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
      pageCount: 324
    };
    var scifiShelf = [hyperion, dune, endersgame];

    assert.equal(scifiShelf.length, 3);
    assert.include(scifiShelf, dune);

    unshelfBook("Dune", scifiShelf);
    
    assert.equal(scifiShelf.length, 2);
    assert.notInclude(scifiShelf, dune);
  })

  it.skip("shelves can only hold a certain amount of books", function() {
    var hyperion = {
      title: "Hyperion",
      mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
      pageCount: 482
    };
    var dune = {
      title: "Dune",
      mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
      pageCount: 421
    };
    var endersgame = {
      title: "Ender's Game",
      mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
      pageCount: 324
    };
    var caseysTitle = createTitle("Robot Kitty");
    var caseysCharacter = buildMainCharacter("Coda", 15, "he/him");
    var caseysBook = writeBook(caseysTitle, caseysCharacter, "scifi");
    var scifiShelf = [hyperion, dune];
    
    shelfBook(endersgame, scifiShelf);

    assert.equal(scifiShelf.length, 3);

    shelfBook(caseysBook, scifiShelf);

    assert.equal(scifiShelf.length, 3);
    assert.notInclude(scifiShelf, caseysBook);
  })

  it.skip('if a shelf is full, a new shelf should be started', function() {
    var hyperion = {
      title: "Hyperion",
      mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
      pageCount: 482
    };
    var dune = {
      title: "Dune",
      mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
      pageCount: 421
    };
    var endersgame = {
      title: "Ender's Game",
      mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
      pageCount: 324
    };
    var caseysTitle = createTitle("Robot Kitty");
    var caseysCharacter = buildMainCharacter("Coda", 15, "he/him");
    var caseysBook = writeBook(caseysTitle, caseysCharacter, "scifi");
    var scifiShelf = [hyperion, dune];
    
    shelfBook(endersgame, scifiShelf);

    assert.equal(scifiShelf.length, 3);

    var secondScifiShelf = shelfBook(caseysBook, scifiShelf);

    assert.equal(secondScifiShelf[0], caseysBook);
  })
})