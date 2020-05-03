var assert = require('chai').assert;
var createTitle = require('../src/book.js').createTitle;
var buildMainCharacter = require('../src/book.js').buildMainCharacter;
var calculatePageCount = require('../src/book.js').calculatePageCount;
var writeBook = require('../src/book.js').writeBook;
var editBook = require('../src/book.js').editBook;

describe('book.js', function() {
  it('createTitle should be a function', function() {
    assert.isFunction(createTitle);
  })

  it('createTitle should take in a title and return a modified title', function() {
    var bookIdea = createTitle("Storm's Awakening");

    assert.equal(bookIdea, "The Storm's Awakening");
  })

  it('createTitle should be able to create many modified titles', function() {
      var sushiTitle = createTitle("Dancing Sushi");
      var dragonTitle = createTitle("Dragon in the Summer");
      var ghostTitle = createTitle("Teenage Ghoul");

      assert.equal(sushiTitle, "The Dancing Sushi");
      assert.equal(dragonTitle, "The Dragon in the Summer");
      assert.equal(ghostTitle, "The Teenage Ghoul");
  })

  it('buildMainCharacter should be a function (make sure to uncomment the function you create in book.js in the module.exports)', function() {
    assert.isFunction(buildMainCharacter);
  })

  it('buildMainCharacter should make a character object', function() {
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");

    assert.equal(ghoulCharacter.name, "Vassya");
    assert.equal(ghoulCharacter.age, 16);
    assert.equal(ghoulCharacter.pronouns, "she/her");
  })

  it('calculatePageCount should be a function (make sure to uncomment the function you create in book.js in the module.exports)', function() {
    assert.isFunction(calculatePageCount);
  })

  it('calculatePageCount should add 20 pages per letter in the title', function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulPageCount = calculatePageCount(ghoulTitle);

    assert.equal(ghoulPageCount, 340);
  })

  it('calculatePageCount should add 20 pages per letter for a different title', function() {
    var ghoulTitle = createTitle("The Dragon in the Summer");
    var ghoulPageCount = calculatePageCount(ghoulTitle);

    assert.equal(ghoulPageCount, 560);
  })

  it('writeBook should be a function', function() {
    assert.isFunction(writeBook);
  })

  it('writeBook should return a book object', function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
    var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "Leta Keane");

    assert.equal(ghoulBook.title, ghoulTitle);
    assert.equal(ghoulBook.mainCharacter, ghoulCharacter);
    assert.equal(ghoulBook.pageCount, 340);
    assert.equal(ghoulBook.author, "Leta Keane");
  })

  it('writeBook should return a different book object', function() {
    var dragonTitle = createTitle("The Dragon in the Summer");
    var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
    var dragonBook = writeBook(dragonTitle, dragonCharacter, "Scott Ertmer");

    assert.equal(dragonBook.title, dragonTitle);
    assert.equal(dragonBook.mainCharacter, dragonCharacter);
    assert.equal(dragonBook.pageCount, 560);
    assert.equal(dragonBook.author, "Scott Ertmer");
  })

  it('editBook should be a function', function() {
    assert.isFunction(editBook);
  })

  it('editBook change the page count to a value passed in', function() {
    var ghoulTitle = createTitle("Teenage Ghoul");
    var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
    var ghoulBook = writeBook(ghoulTitle, ghoulCharacter);

    assert.equal(ghoulBook.pageCount, 340);
    
    assert.equal(editBook(ghoulBook, 200), undefined); //Too spicy?
    assert.equal(ghoulBook.pageCount, 200);
  })
})
