var assert = require('chai').assert;
var Book = require('../src/book.js');

describe('book.js', function() {
  it('should have a function called createTitle', function() {
    assert.isFunction(Book.createTitle);
  })

  it('createTitle should take in a title and return a modified title', function() {
    var bookIdea = Book.createTitle("Storm's Awakening");

    assert.isEqual(bookIdea, "The Storm's Awakening");
  })

  it('createTitle should be able to create many modified titles', function() {
      var sushiBook = Book.createTitle("Dancing Sushi");
      var dragonBook = Book.createTitle("Dragon in the Summer");
      var ghostBook = Book.createTitle("Teenage Ghoul");

      assert.isEqual(sushiBook, "The Dancing Sushi");
      assert.isEqual(dragonBook, "The Dragon in the Summer");
      assert.isequal(ghostBook, "The Teenage Ghoul");
  })
})
