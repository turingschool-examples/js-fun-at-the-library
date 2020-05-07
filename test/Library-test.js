var assert = require("chai").assert;
var createLibrary = require("../src/library.js").createLibrary;
var checkoutBook = require("../src/library.js").checkoutBook;
var addBook = require("../src/Library.js").addBook;
// added <var addBook = require("../src/Library.js").addBook;>

describe("library.js", function() {
  describe("createLibrary", function() {
    it.skip("should be a function", function() {
      assert.isFunction(createLibrary);
    });
  
    it.skip("should have a name", function() {
      var denverLibrary = createLibrary("Denver Public Library");
  
    assert.equal(denverLibrary.name, "Denver Public Library");
    });
  
    it.skip("should be able to have a different name", function() {
      var goldenLibrary = createLibrary("Golden Public Library");
  
      assert.equal(goldenLibrary.name, "Golden Public Library");
    });
  
    it.skip("should have shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");
  
      assert.isObject(denverLibrary.shelves);
    });
  
    it.skip("should have several different types of shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");
  
      assert.deepEqual(denverLibrary.shelves.fantasy, []);
      assert.deepEqual(denverLibrary.shelves.fiction, []);
      assert.deepEqual(denverLibrary.shelves.nonFiction, []);
    });
  });
  
  describe("addBook", function() {
    it.skip("should add book to the fantasy shelf", function() {
      var denverLibrary = createLibrary("Denver Public Library");
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
  
      addBook(denverLibrary, dracula);
  
      assert.equal(denverLibrary.shelves.fantasy[0], dracula);
    });

    it.skip('should add books to the correct shelves automatically', function() {
      var denverLibrary = createLibrary("Denver Public Library");
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Draula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
      var paleBlueDot = {
        title: "The Pale Blue Dot",
        mainCharacter: undefined,
        pageCount: 187,
        genre: 'nonFiction'
      }

      addBook(denverLibrary, dracula);
      addBook(denverLibrary, paleBlueDot);

      assert.equal(denverLibrary.shelves.fantasy[0], dracula);
      assert.equal(denverLibrary.shelves.nonFiction[0], paleBlueDot);
    });
  });
  
  describe("checkoutBook", function() {
    it.skip('should unshelf a book to check out a book to a patron', function() {
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
      var bornACrime = {
        title: "Born a Crime",
        mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
        pageCount: 304,
        genre: "nonFiction"
      }
      var prideAndPrejudice = {
        title: "Pride and Prejudice",
        mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
        pageCount: 432,
        genre: "fiction"
      }
      var denverLibrary = createLibrary("Denver Public Library");
  
      addBook(denverLibrary, dracula);
      addBook(denverLibrary, bornACrime);
      addBook(denverLibrary, prideAndPrejudice);
  
      var result = checkoutBook(denverLibrary, "Pride and Prejudice");
  
      assert.deepEqual(denverLibrary.shelves, {fantasy: [dracula], fiction: [], nonFiction: [bornACrime]});;
      assert.equal(result, "You have now checked out Pride and Prejudice from the Denver Public Library")
    });
    
    it.skip('should only checkout a book if the book is on the shelves', function() {
      var denverLibrary = createLibrary("Denver Public Library");
          
      var error = checkoutBook(denverLibrary, "The Fifth Season");
      
      assert.equal(error, "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library");
    });
  });
});