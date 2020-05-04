var assert = require("chai").assert;
var createTitle = require("../src/book.js").createTitle;
var buildMainCharacter = require("../src/book.js").buildMainCharacter;
var calculatePageCount = require("../src/book.js").calculatePageCount;
var writeBook = require("../src/book.js").writeBook;
var editBook = require("../src/book.js").editBook;

describe("book.js", function() {
  it("createTitle should be a function", function() {
    assert.isFunction(createTitle);
  })

  it.skip("createTitle should take in a title and return a modified title", function() {
    var bookIdea = createTitle("Storm's Awakening");

    assert.equal(bookIdea, "The Storm's Awakening");
  })

  it.skip("createTitle should be able to create many modified titles", function() {
      var sushiTitle = createTitle("Dancing Sushi");
      var dragonTitle = createTitle("Dragon in the Summer");
      var ghostTitle = createTitle("Teenage Ghoul");

      assert.equal(sushiTitle, "The Dancing Sushi");
      assert.equal(dragonTitle, "The Dragon in the Summer");
      assert.equal(ghostTitle, "The Teenage Ghoul");
  })

  it.skip("buildMainCharacter should be a function (make sure to uncomment the function you create in book.js in the module.exports)", function() {
    assert.isFunction(buildMainCharacter);
  })

  it.skip("buildMainCharacter should make a character object", function() {
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");

    assert.equal(ghoulCharacter.name, "Vassya");
    assert.equal(ghoulCharacter.age, 16);
    assert.equal(ghoulCharacter.pronouns, "she/her");
  })

  it.skip("calculatePageCount should be a function (make sure to uncomment the function you create in book.js in the module.exports)", function() {
    assert.isFunction(calculatePageCount);
  })

  it.skip("calculatePageCount should add 20 pages per letter in the title", function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulPageCount = calculatePageCount(ghoulTitle);

    assert.equal(ghoulPageCount, 340);
  })

  it.skip("calculatePageCount should add 20 pages per letter for a different title", function() {
    var ghoulTitle = createTitle("The Dragon in the Summer");
    var ghoulPageCount = calculatePageCount(ghoulTitle);

    assert.equal(ghoulPageCount, 560);
  })

  it.skip("writeBook should be a function", function() {
    assert.isFunction(writeBook);
  })

  it.skip("writeBook should return a book object", function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
    var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "fantasy");

    assert.equal(ghoulBook.title, ghoulTitle);
    assert.equal(ghoulBook.mainCharacter, ghoulCharacter);
    assert.equal(ghoulBook.pageCount, 340);
  })

  it.skip("writeBook should return a different book object", function() {
    var dragonTitle = createTitle("The Dragon in the Summer");
    var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
    var dragonBook = writeBook(dragonTitle, dragonCharacter, "fantasy");

    assert.equal(dragonBook.title, dragonTitle);
    assert.equal(dragonBook.mainCharacter, dragonCharacter);
    assert.equal(dragonBook.pageCount, 560);
  })

  it.skip("editBook should be a function", function() {
    assert.isFunction(editBook);
  })

  it.skip("editBook decrease the book's page count to be three quarters of what it originally was", function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
    var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "mystery");

    assert.equal(ghoulBook.pageCount, 340);
    
    assert.equal(editBook(ghoulBook), undefined); // Too spicy?
    assert.equal(ghoulBook.pageCount, 255);
  })
})
