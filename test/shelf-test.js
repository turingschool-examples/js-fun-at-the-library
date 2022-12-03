var assert = require("chai").assert;

var {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
} = require("../src/shelf.js")

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
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var sciFiShelf = [];

      shelfBook(hyperion, sciFiShelf);
      shelfBook(dune, sciFiShelf);

      assert.equal(sciFiShelf[0], dune);
      assert.equal(sciFiShelf[1], hyperion);
    });

    it("should add another book to the shelf", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var sciFiShelf = [hyperion];

      shelfBook(endersGame, sciFiShelf);
      shelfBook(dune, sciFiShelf);

      assert.equal(sciFiShelf[0], dune);
      assert.equal(sciFiShelf[1], endersGame);
      assert.equal(sciFiShelf[2], hyperion);
    });

    it("shelves can only hold a certain amount of books", function () {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var caseysBook = {
        title: "The Robot Kitty",
        mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
        pageCount: 201,
        genre: "sciFi"
      };
      var sciFiShelf = [hyperion, dune];

      shelfBook(endersGame, sciFiShelf);

      assert.equal(sciFiShelf.length, 3);
      assert.deepEqual(sciFiShelf, [endersGame, hyperion, dune]);

      shelfBook(caseysBook, sciFiShelf);

      assert.equal(sciFiShelf.length, 3);
      assert.deepEqual(sciFiShelf, [endersGame, hyperion, dune]);
    });
  });

  describe("unshelfBook", function() {
    it("should be a function", function() {
      assert.isFunction(unshelfBook);
    });

    it("should remove a book by name", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var sciFiShelf = [hyperion, dune, endersGame];

      unshelfBook("Dune", sciFiShelf);

      assert.equal(sciFiShelf.length, 2);
      assert.deepEqual(sciFiShelf, [hyperion, endersGame]);

      unshelfBook("Hyperion", sciFiShelf);

      assert.equal(sciFiShelf.length, 1);
      assert.deepEqual(sciFiShelf, [endersGame]);
    });

    it("should remove a book on a different shelf by name", function() {
      var bossypants = {
        title: "Bossypants",
        mainCharacter: { name: "Tina Fey", age: 50, pronouns: "she/her" },
        pageCount: 277,
        genre: "nonFiction"
      };
      var whyNotMe = {
        title: "Why Not Me?",
        mainCharacter: { name: "Mindy Kaling", age: 41, pronouns: "she/her" },
        pageCount: 240,
        genre: "nonFiction"
      };
      var nonFictionShelf = [bossypants, whyNotMe];

      unshelfBook("Why Not Me?", nonFictionShelf);

      assert.equal(nonFictionShelf.length, 1);
      assert.deepEqual(nonFictionShelf, [bossypants]);

      unshelfBook("Bossypants", nonFictionShelf);

      assert.equal(nonFictionShelf.length, 0);
      assert.deepEqual(nonFictionShelf, []);
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
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var fantasyShelf = [hyperion, dune, endersGame];

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
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var sciFiShelf = [dune, hyperion];

      assert.equal(searchShelf(sciFiShelf, "Hyperion"), true);
      assert.equal(searchShelf(sciFiShelf, "The Fifth Season"), false);
    });

    it("should tell us if a title is on a different shelf", function() {
      var bossypants = {
        title: "Bossypants",
        mainCharacter: { name: "Tina Fey", age: 50, pronouns: "she/her" },
        pageCount: 277,
        genre: "nonFiction"
      };
      var whyNotMe = {
        title: "Why Not Me?",
        mainCharacter: { name: "Mindy Kaling", age: 41, pronouns: "she/her" },
        pageCount: 240,
        genre: "nonFiction"
      };
      var nonFictionShelf = [bossypants, whyNotMe];

      assert.equal(searchShelf(nonFictionShelf, "Why Not Me?"), true);
      assert.equal(searchShelf(nonFictionShelf, "Yes Please"), false);
    });
  });
});
