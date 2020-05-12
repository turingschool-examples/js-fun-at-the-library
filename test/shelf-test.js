var assert = require("chai").assert;
var shelfBook = require("../src/shelf.js").shelfBook;
var unshelfBook = require("../src/shelf.js").unshelfBook;
var listTitles = require("../src/shelf.js").listTitles;
var searchShelf = require("../src/shelf.js").searchShelf;

describe("shelf.js", function() {
  describe("shelfBook", function() {
    it("should be a function", function() {
      assert.isFunction(shelfBook);
    });

    it("should add books to a specific shelf", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "scifi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "scifi"
      };
      var scifiShelf = [];

      shelfBook(hyperion, scifiShelf);
      shelfBook(dune, scifiShelf);

      assert.equal(scifiShelf[0], dune);
      assert.equal(scifiShelf[1], hyperion);
    });

    it('should add another book to the shelf', function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "scifi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "scifi"
      };
      var endersgame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "scifi"
      };
      var scifiShelf = [hyperion];

      shelfBook(endersgame, scifiShelf);
      shelfBook(dune, scifiShelf);

      assert.equal(scifiShelf[0], dune);
      assert.equal(scifiShelf[1], endersgame);
      assert.equal(scifiShelf[2], hyperion);
    });

    it("shelves can only hold a certain amount of books", function () {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "scifi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "scifi"
      };
      var endersgame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "scifi"
      };
      var caseysbook = {
        title: "The Robot Kitty",
        mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
        pageCount: 201,
        genre: "scifi"
      };
      var scifiShelf = [hyperion, dune];

      shelfBook(endersgame, scifiShelf);

      assert.equal(scifiShelf.length, 3);
      assert.deepEqual(scifiShelf, [endersgame, hyperion, dune]);

      shelfBook(caseysbook, scifiShelf);

      assert.equal(scifiShelf.length, 3);
      assert.deepEqual(scifiShelf, [endersgame, hyperion, dune]);
    });
  });

  describe("unshelfBook", function() {
    it('should be a function', function() {
      assert.isFunction(unshelfBook);
    });

    it('should remove a book by name', function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "scifi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "scifi"
      };
      var endersgame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "scifi"
      };
      var scifiShelf = [hyperion, dune, endersgame];

      unshelfBook("Dune", scifiShelf);

      assert.equal(scifiShelf.length, 2);
      assert.deepEqual(scifiShelf, [hyperion, endersgame]);
    });
  });

  describe("listTitles", function () {
    it("should be a function", function () {
      assert.isFunction(listTitles);
    });

    it("should create a list of all the titles on a shelf", function () {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "scifi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "scifi"
      };
      var endersgame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "scifi"
      };
      var fantasyShelf = [hyperion, dune, endersgame];

      var titles = listTitles(fantasyShelf);

      assert.deepEqual(titles, "Hyperion, Dune, Ender's Game");
    });
  });

  describe("searchShelf", function() {
    it("should tell us if a title is on the shelf", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "scifi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "scifi"
      };
      var scifiShelf = [dune, hyperion];

      assert.equal(searchShelf(scifiShelf, "Hyperion"), true);
      assert.equal(searchShelf(scifiShelf, "The Fifth Season"), false);
    });
  });
});
