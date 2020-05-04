var assert = require("chai").assert;
var Library = require("../src/Library.js");

describe("Library", function() {
  it.skip("Library should be a function", function() {
    assert.isFunction(Library);
  })

  it.skip("Library should have a name", function() {
    var denverLibrary = new Library("Denver Public Library");

  assert.equal(denverLibrary.name, "Denver Public Library");
  })

  it.skip("Library should be able to have another name", function() {
    var goldenLibrary = new Library("Golden Public Library");

    assert.equal(goldenLibrary.name, "Golden Public Library");
  })

  it.skip("Library should have a catalog", function() {
    var denverLibrary = new Library("Denver Public Library");

    assert.isArray(denverLibrary.catalog);
    assert.equal(denverLibrary.catalog.length, 0);
  })

  it.skip("Library should have shelves", function() {
    var denverLibrary = new Library("Denver Public Library");

    assert.isObject(denverLibrary.shelves);
  })

  it.skip("Library should have several different types of shelves", function() {
    var denverLibrary = new Library("Denver Public Library");

    assert.isArray(denverLibrary.shelves.fantasy);
    assert.isArray(denverLibrary.shelves.fiction);
    assert.isArray(denverLibrary.shelves.nonFiction);
  })

  it.skip("A Library should be able to add books to their catalog", function() {
    var denverLibrary = new Library("Denver Public Library");
    var dracula = {
      title: "Dracula",
      mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
      pageCount: 418,
      genre: "fantasy"
    }

    denverLibrary.addBook(dracula);

    assert.equal(denverLibrary.catalog[0], "Dracula");
  })

  it.skip("A Library should be able to add books to their shelves", function() {
    var bornACrime = {
      title: "Born a Crime",
      mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
      pageCount: 304,
      genre: "nonFiction"
    }
    var denverLibrary = new Library("Denver Public Library");

    denverLibrary.addBook(bornACrime);

    assert.equal(denverLibrary.catalog[0], "Born a Crime");
    assert.equal(denverLibrary.shelves.nonFiction[0], bornACrime);
  })

  it.skip('A Library should be able to check out books to patrons', function() {
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
    var denverLibrary = new Library("Denver Public Library");

    denverLibrary.addBook(dracula);
    denverLibrary.addBook(bornACrime);
    denverLibrary.addBook(prideAndPrejudice);

    var requestConfirmation = denverLibrary.checkoutBook("Pride and Prejudice", "fiction");

    assert.notInclude(denverLibrary.catalog, "Pride and Prejudice");
    assert.equal(requestConfirmation, "Yes, we have Pride and Prejudice");
  })

  it.skip('A Library should unshelf a book to check out a book to a patron', function() {
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
    var denverLibrary = new Library("Denver Public Library");

    denverLibrary.addBook(dracula);
    denverLibrary.addBook(bornACrime);
    denverLibrary.addBook(prideAndPrejudice);

    assert.include(denverLibrary.shelves.fiction, prideAndPrejudice);

    denverLibrary.checkoutBook("Pride and Prejudice", "fiction");

    assert.notInclude(denverLibrary.shelves.fiction, prideAndPrejudice)
  })
})