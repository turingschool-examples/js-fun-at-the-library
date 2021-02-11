var assert = require("chai").assert;

var {
  createTitle,
  buildMainCharacter,
  calculatePageCount,
  saveReview,
  writeBook,
  editBook
} = require("../src/book.js");


describe("book.js", function () {
  describe("createTitle", function() {
    it.skip("should be a function", function () {
      assert.isFunction(createTitle);
    });
  
    it.skip("should take in a title and return a modified title", function () {
      var bookIdea = createTitle("Storm's Awakening");
  
      assert.equal(bookIdea, "The Storm's Awakening");
    });
  
    it.skip("should be able to create many modified titles", function () {
      var sushiTitle = createTitle("Dancing Sushi");
      var dragonTitle = createTitle("Dragon in the Summer");
      var ghostTitle = createTitle("Teenage Ghoul");
  
      assert.equal(sushiTitle, "The Dancing Sushi");
      assert.equal(dragonTitle, "The Dragon in the Summer");
      assert.equal(ghostTitle, "The Teenage Ghoul");
    });
  });

  describe("buildMainCharacter", function() {
    it.skip("should be a function (comment the function back into the module.exports object in book.js)", function () {
      assert.isFunction(buildMainCharacter);
    });
  
    it.skip("should create a character object", function () {
      var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
      var bakerCharacter = buildMainCharacter("Hannah", 30, "she/her");
  
      assert.equal(ghoulCharacter.name, "Vassya");
      assert.equal(ghoulCharacter.age, 16);
      assert.equal(ghoulCharacter.pronouns, "she/her");

      assert.equal(bakerCharacter.name, "Hannah");
      assert.equal(bakerCharacter.age, 30);
      assert.equal(bakerCharacter.pronouns, "she/her");
    });
  });

  describe("saveReview", function() {
    it.skip("should be a function (comment the function back into the module.exports object in book.js)", function () {
      assert.isFunction(saveReview);
    });

    it.skip("should be able to add reviews to an array", function() {
      var reviews = [];

      saveReview("An astounding success", reviews);

      assert.equal(reviews.length, 1);
      assert.deepEqual(reviews, ["An astounding success"]);
    });

    it.skip("should be able to add reviews to an array that already contains reviews", function() {
      var reviews = ["You won't be able to put it down"];

      saveReview("A page turner!", reviews);
      saveReview("An instant classic!", reviews);

      assert.equal(reviews.length, 3);
      assert.deepEqual(reviews, ["You won't be able to put it down", "A page turner!", "An instant classic!"]);
    });

    it.skip("should only add unique reviews", function() {
      var reviews = [];

      saveReview("I want everyone to read this book!", reviews);
      saveReview("I couldn't stop reading!", reviews);
      saveReview("I want everyone to read this book!", reviews);

      assert.equal(reviews.length, 2);
      assert.deepEqual(reviews, ["I want everyone to read this book!", "I couldn't stop reading!"]);
    });
  });

  describe("calculatePageCount", function() {
    it.skip("should be a function (comment the function back into the module.exports object in book.js)", function () {
      assert.isFunction(calculatePageCount);
    });
  
    it.skip("should add 20 pages per letter in the title", function () {
      var bookTitle = createTitle("Teenage Ghoul");
      var bookPageCount = calculatePageCount(bookTitle);
  
      assert.equal(bookPageCount, 340);
    });
  
    it.skip("should add 20 pages per letter for a different title", function () {
      var bookTitle = createTitle("The Dragon in the Summer");
      var bookPageCount = calculatePageCount(bookTitle);
  
      assert.equal(bookPageCount, 560);
    });
  });

  describe("writeBook", function() {
    it.skip("should be a function", function () {
      assert.isFunction(writeBook);
    });
  
    it.skip("should return a book object", function () {
      var bookTitle = createTitle("Teenage Ghoul");
      var bookCharacter = buildMainCharacter("Vassya", 16, "she/her");
      var book = writeBook(bookTitle, bookCharacter, "fantasy");
  
      assert.equal(book.title, bookTitle);
      assert.equal(book.mainCharacter, bookCharacter);
      assert.equal(book.pageCount, 340);
      assert.equal(book.genre, "fantasy");
    });
  
    it.skip("should return a different book object", function () {
      var dragonTitle = createTitle("Dragon in the Summer");
      var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
      var dragonBook = writeBook(dragonTitle, dragonCharacter, "fantasy");
  
      assert.equal(dragonBook.title, dragonTitle);
      assert.equal(dragonBook.mainCharacter, dragonCharacter);
      assert.equal(dragonBook.pageCount, 560);
      assert.equal(dragonBook.genre, "fantasy");
    });
  });

  describe("editBook", function() {
    it.skip("should be a function", function () {
      assert.isFunction(editBook);
    });
  
    it.skip("should decrease the book's page count to be three quarters of what it originally was", function () {
      var ghoulTitle = createTitle("Teenage Ghoul");
      var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
      var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "mystery");
  
      assert.equal(ghoulBook.pageCount, 340);

      editBook(ghoulBook);
  
      assert.equal(ghoulBook.pageCount, 255);
    });


    it.skip("should decrease a different book's page count to be three quarters of what it originally was", function () {
      var dragonTitle = createTitle("Dragon in the Summer");
      var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
      var dragonBook = writeBook(dragonTitle, dragonCharacter, "fantasy");
      
      assert.equal(dragonBook.pageCount, 560);

      editBook(dragonBook);

      assert.equal(dragonBook.pageCount, 420);
    });
  });
});
